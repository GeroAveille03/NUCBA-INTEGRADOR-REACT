import { motion } from "framer-motion";
import styled, {css} from "styled-components";

export const IncreaseSty = styled(motion.button)`
    background: white;
    border: none;
    border-radius: 15px;
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
    font-weight: 800;
    color: red;
    cursor: pointer;

    ${({secondary}) =>
        secondary && css`
        background: var(--blue-union);
        `
    }
`