import React from "react";

function Footer() {
  return (
    <section className="bg-slate-900 lg:h-screen" id="contact">
      <div className="text-white font-pop font-lg relative lg:top-20 ">
        <h1 className="text-4xl md:text-6xl font-syne font-bold flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 py-20">
          CONTACT
        </h1>
        <div className="hover:text-sky-500 pb-3 flex justify-center">
          <a
            href="mailto:smriti37031@gmail.com"
            target="_blank"
            className="horizontal_line pb-2"
          >
            smriti37031@gmail.com
          </a>
        </div>
        <div className="py-3 gap-4 flex justify-center cursor-pointer">
          <a
            href="https://www.linkedin.com/in/smriti-92a88a218/"
            target="_blank"
          >
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" />
          </a>
          <a href="https://www.instagram.com/smriti_925/" target="_blank">
            <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100055302942384"
            target="_blank"
          >
            <img src="https://img.icons8.com/color/48/000000/facebook.png" />
          </a>
        </div>
        <div className="text-sm p-1 flex justify-center text-gray-400">
          Kangra, Himachal Pradesh
        </div>
        <div className="text-sm p-1 flex justify-center text-gray-400">
          India (177114)
        </div>
      </div>
      <div className="pb-10">
        <img src="https://demo.fffuel.co/looking-ahead/images/oooscillate-2.svg"></img>
      </div>
    </section>
  );
}

export default Footer;
