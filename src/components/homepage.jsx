import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import '../style/fonts.css';

const FrontWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #023047;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    text-align: center;
    color: #FFB703;
`;

const H1Text = styled.h1 `
    color: #FB8500;
    font-size: 75px;
    font-family: "Shadows Into Light", cursive;
`

const Homepage = () => {
    return (
        <FrontWrapper>
            <TextWrapper>
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                >
                    <H1Text>HEY, I'M DAWID RAK</H1Text>
                </motion.div>
            </TextWrapper>
        </FrontWrapper>
    );
};

export default Homepage;