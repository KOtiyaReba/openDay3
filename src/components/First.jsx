import { Typography } from "@mui/material";
import React from "react";

const First = (props) => {
  return (
    <div>
      <h1>Hello {props.data.name} </h1>

      <Typography variant="h1">{props.data.age}</Typography>
    </div>
  );
};

export default First;
