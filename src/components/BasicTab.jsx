import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BasicTab = () => {
  var [output, setOutput] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setOutput(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  color: "red",
                  fontFamily: "cursive",
                  fontSize: "30px",
                }}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  color: "red",
                  fontFamily: "cursive",
                  fontSize: "30px",
                }}
              >
                Email
              </TableCell>
              <TableCell
                style={{
                  color: "red",
                  fontFamily: "cursive",
                  fontSize: "30px",
                }}
              >
                City
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {output.map((val, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.email}</TableCell>
                  <TableCell>{val.address.city}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTab;
