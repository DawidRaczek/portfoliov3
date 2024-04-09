import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FrontWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #023047;
`;

const textWrapper = styled.div`
    text-align: center;
    color: #FFB703;
`;

const Homepage = () => {
    return (
        <FrontWrapper>
            <textWrapper>
            </textWrapper>
        </FrontWrapper>
    );
};

export default Homepage;