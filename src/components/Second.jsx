import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Second = () => {
  var [name, setName] = useState("Tiya");
  const changeName = ()=>{
    console.log("btn clicked");
    setName("Home");
  }

  const conName = ()=>{
    console.log("con clicked");
    setName("Contact")

  }
  return (
    <div style={{ margin: "18%", textAlign: "center" }}>
      <Typography variant="h3">Welcome to {name}</Typography>
      <br />
      <Button variant="contained" onClick={changeName}>Home</Button> &nbsp;
      <Button variant="contained" color="secondary" onClick={conName}>
        Contact
      </Button>
    </div>
  );
};

export default Second;
