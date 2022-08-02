import styled from "styled-components";
import { motion } from 'framer-motion'

export const InputSubmitSty = styled(motion.input)`
    padding: 0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: var(--blue-union);
    color: white;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
    margin-top: 15px;
`