import styled from "styled-components";
import { motion } from 'framer-motion';

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    gap: 120px;
    margin-left: -140px;
`

export const CarouselContainer = styled.div`
    height: 100%;
    width: 490px;
    display: flex;
    justify-content: center;
`

export const CarouselImg = styled.img`
    height: auto;
    width: auto;
`

export const TitleSty = styled.h1`
    height: 3rem;
    width: 30rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    box-shadow: 20px 20px 4px -7px rgba(0,0,0,0.1);
    background-color: white;
    text-align: center;
    color: var(--bordo-bg);
    pointer-events: none;
`
export const ButtonSty = styled(motion.button)`
    height: 75px;
    width: 300px;
    border: none;
    border-radius: 0.4rem;
    box-shadow: 5px 6px 0px -3px rgba(255,255,255,0.7);
    cursor: pointer;
    background-color: var(--white-union);
    color: var(--bordo-bg);
    font-size: 1.2em;
    font-weight: 800;
    text-transform: uppercase;
`
