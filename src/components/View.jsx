import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const View = () => {
  var [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/view")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const upDate = (val) => {
    console.log(val);
    setUp(true);
    //  navigate("/add", { state: { data, update } });
    navigate("/", { state: { val } });
  };

  const delV = (id)=>{
    axios.delete("http://localhost:3000/remove/"+id)
    .then((res)=>{
        alert(res.data.message)
       window.location.reload();

    })
  }
  return (
    <div style={{ margin: "2%" }}>
      <Grid container spacing={2}>
        {data.map((val, i) => {
          return (
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275 }} key={i}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {val.Name}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {val.Age}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {val.Place}
                  </Typography>
                  <Typography variant="body2">
                    {val.Phone}
                    <br />
                   
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>delV(val._id)}>Del</Button>
                  <Button size="small" onClick={() => upDate(val)}>
                    Up
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default View;
