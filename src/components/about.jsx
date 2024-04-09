import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const AboutWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #219EBC;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    text-align: center;
    color: #FFB703;
    font-size: 25px;
`;

const P1Text = styled.div`
    color: #FB8500;
`
const P2Text = styled.div`
    color: #FB8500;
`
const P3Text = styled.div`
    color: #FB8500;
`

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <AboutWrapper ref={ref}>
            <TextWrapper>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                >
                    <P1Text>
                        A frontend developer with expertise in JavaScript 
                        and proficiency in the React library.
                    </P1Text>
                </motion.div>
                <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: 1.0,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                >
                    <P2Text>
                        My passion lies in creating immersive web experiences, 
                        and I bring a strong commitment to clean, 
                        efficient code and a keen eye for user-centric design to every project.
                    </P2Text>
                </motion.div>
                <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                >
                    <P3Text>
                        With a solid foundation in frontend technologies, 
                        I thrive on transforming creative ideas into seamless and responsive applications. 
                    </P3Text>
                </motion.div>
            </TextWrapper>
        </AboutWrapper>
    );
};

export default About;