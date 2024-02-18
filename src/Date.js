import React from "react";

var DateTime = () => {
  var showdate = new Date();
  var dt = showdate.toDateString();

  return <div>{dt}</div>;
};
export default DateTime;
