import React from "react";
import NavBar from "../../components/navbar/Navbar";
import BasicTable from "../../components/tables/BasicTable";
import Content from "../../components/Content";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    // https://palettes.shecodes.io/palettes/1313 - color palette
    <>
      <NavBar />
      <Content>
        <Button
          style={{
            fontSize: "1rem",
            padding: "10px 10px",
            width: "fit-content",
            backgroundColor: "#142d4c",
          }}
          variant="contained"
          color="primary"
        >
          Create book
        </Button>
        <BasicTable />
      </Content>
    </>
  );
};

export default HomePage;
