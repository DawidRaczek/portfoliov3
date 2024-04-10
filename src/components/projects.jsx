import React from "react";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import '../style/projectsScroll.css';
import '../style/presence.css';

const ProjectsWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8ECAE6;
    position: relative;
`;

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <li onClick={handleOpen}></li>
      <Modal
      open={isOpen}
      onClose={handleClose}
      >
        <div>
          hello world
        </div>
      </Modal>
    </>
  )

};


const Projects = () => {

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <ProjectsWrapper>
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
        </svg>
      <ul ref={ref}>
        <Layout/>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
        </ProjectsWrapper>
    );
};

export default Projects;