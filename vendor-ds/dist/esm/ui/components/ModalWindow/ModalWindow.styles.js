import styled_components from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
const Backdrop = styled_components.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: ${({ theme })=>theme.color.backgroundBrand};
  opacity: 0.6;
`;
const Body = styled_components(motion.div).attrs({
    initial: {
        y: -24
    },
    animate: {
        y: 0
    },
    exit: {
        y: 24
    },
    transition: {
        duration: 0.25,
        ease: 'easeInOut'
    }
})`
  position: relative;
  display: block;
  background-color: ${({ theme })=>theme.color.backgroundDefault};
  box-shadow: ${({ theme })=>theme.shadows.basic};
  border-radius: 8px;
`;
const Container = styled_components(motion.div).attrs({
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    },
    transition: {
        duration: 0.25
    }
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export { AnimatePresence, Backdrop, Body, Container };
