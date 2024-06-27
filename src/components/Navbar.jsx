import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MyApp
            </Typography>
            <Button>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Add
              </Link>
            </Button>
            <Button>
              <Link
                to={"/s"}
                style={{ textDecoration: "none", color: "white" }}
              >
                View
              </Link>
            </Button>
            <Button color="inherit">Third</Button>
            <Button>
              <Link
                to={"/tab"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Table
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
