import styled from "styled-components";

export const FooterContainerSty = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 250px;
    width: 100vw;
    background-color: var(--bordo-bg);
`

export const GeneralContainerSty = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: 180px;
`

export const SocialIconsSty = styled.div`
    display: flex;
    position: relative;
    left: -60px;
    gap: 20px;
`

export const HrSty = styled.hr`
    width: 100%;
    color: white;
`;

export const FooterH2Sty = styled.h2`
    font-size: 2em;
    color: white;
`