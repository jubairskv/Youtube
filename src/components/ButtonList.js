import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const button_list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Motivation",
    "Soundtrack",
    "Comedy",
    "Pop Music",
    "Tamil Cinema",
    "Trailers",
    "Gadgets",
    "Recently Uploaded",
  ];

  return (
    <div className=" flex whitespace-nowrap ">
      {button_list.map((btn_name, index) => (
        <Button key={index} name={btn_name} />
      ))}
    </div>
  );
};

export default ButtonList;
