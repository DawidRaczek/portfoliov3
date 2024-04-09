import './App.css'
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import { motion, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";

const Scrollbar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #FB8500;
  transform-origin: 0%;
`;

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <Scrollbar style={{ scaleX }}/>
      <Homepage></Homepage>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

export default App
