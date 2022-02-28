import React, { useState, useEffect } from "react";
import axios from "axios";

function SkillsData() {
  const [apiCall, setApiCall] = useState("");
  useEffect(() => {
    axios
      .get("https://json-server-heroku-hosting1.herokuapp.com/users")
      .then((res) => {
        console.log(res.data);
        setApiCall(res.data);
      });
  }, []);

  return (
    <marquee behavior="scroll" scrollamount="15">
      <div className="main flex">
        {apiCall &&
          apiCall.map((item, index) => {
            return (
              <div className="elements py-2 font-pop text-xs mr-20 text-white">
                <button className="rounded-lg border shadow-md bg-gray-800 hover:bg-gray-900 border-gray-700 w-24 sm:w-28 my-2">
                  {item.title ? item.title : " "}
                </button>
                <div className="flex justify-center">
                  <img
                    src={item.logosrc ? item.logosrc : "logo"}
                    className="my-2 h-20 flex justify-center"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </marquee>
  );
}

export default SkillsData;
