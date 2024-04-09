import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from '@mui/material/Button';

const Header = styled.div`
    position: sticky;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: #FB8500;
    color: black;
    box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
`;

const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const HeaderRight = styled.div`
    font-size: 12px;
    margin-left: 10px;
    font-weight: bold;
    color: rgba(75, 75, 75, 1);
    font-family: 'Open Sans', sans-serif;
`;

const Name = styled.h1`
    margin: 0;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    color: black;
`;

const BlackButton = styled(Button)`
    && {
        color: black;
        font-weight: bold;
    }
`;

const Navbar = () => {
    return (
        <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Header>
        <HeaderLeft>
          <Name>Dawid Rak</Name>
        </HeaderLeft>
        <HeaderRight>
          <BlackButton>About</BlackButton>
          <BlackButton>Projects</BlackButton>
          <BlackButton>Contact</BlackButton>
          <BlackButton>Get my CV</BlackButton>
        </HeaderRight>
      </Header>
    </motion.div>
    );
};

export default Navbar;