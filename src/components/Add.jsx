import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Add = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  var [inputs, setInputs] = useState({
    Name: "",
    Age: "",
    Place: "",
    Phone: "",
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const addHa = () => {
    console.log("c");
    if(location.state !== null){
        axios.put("http://localhost:3000/edit/"+location.state.val._id,inputs)
        .then((res)=>{
            alert(res.data.message)
            navigate('/s')
        })
    }
    else{
        axios.post("http://localhost:3000/add",inputs)
        .then((res)=>{
            alert(res.data.message)
            navigate('/s')
        })
    }
  };

  console.log("loc", location.state);
  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        ...inputs,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Place: location.state.val.Place,
        Phone: location.state.val.Phone,
      });
    }
  }, []);
  return (
    <div style={{ marginTop: "3%", textAlign: "center" }}>
      <TextField
        variant="outlined"
        label="Name"
        onChange={inputHandler}
        name="Name"
        value={inputs.Name}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Age"
        onChange={inputHandler}
        name="Age"
        value={inputs.Age}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Place"
        onChange={inputHandler}
        name="Place"
        value={inputs.Place}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Phone"
        onChange={inputHandler}
        name="Phone"
        value={inputs.Phone}
      />
      <br />
      <br />
      <Button variant="contained" onClick={addHa}>
        Submit
      </Button>
    </div>
  );
};

export default Add;
