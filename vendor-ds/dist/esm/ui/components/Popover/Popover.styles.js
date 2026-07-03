import { motion } from "framer-motion";
import styled_components from "styled-components";
const Container = styled_components(motion.div).attrs(({ placement = 'bottom', isReducedMotion = false })=>({
        initial: {
            opacity: 0,
            pointerEvents: 'none',
            transform: isReducedMotion ? 'none' : `translate3d(0, ${placement.includes('bottom') ? '-' : ''}10px, 0)`
        },
        animate: {
            opacity: 1,
            pointerEvents: 'auto',
            transform: isReducedMotion ? 'none' : 'translate3d(0, 0px, 0)'
        },
        exit: {
            opacity: 0,
            transform: isReducedMotion ? 'none' : `translate3d(0, ${placement.includes('bottom') ? '-' : ''}10px, 0)`,
            pointerEvents: 'none'
        },
        transition: {
            duration: 0.25
        }
    }))`
  box-shadow: ${({ theme })=>theme.shadows.medium};
  background-color: ${({ theme })=>theme.color.backgroundDefault};
  border-radius: 4px;
  position: relative;
  display: block;
  overflow: auto;
  ${({ theme })=>theme.scrollbars.basic};
`;
export { Container };
