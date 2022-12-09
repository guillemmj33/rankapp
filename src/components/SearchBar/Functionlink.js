import dataAPI from "../../data/dataAPI.json";
import React from "react";

const Functionlink = () => {
  const linkapi = dataAPI.data.filter(
    (itemlink) => itemlink.app_developer_website
  );
  console.log(linkapi);
};

export default Functionlink;
