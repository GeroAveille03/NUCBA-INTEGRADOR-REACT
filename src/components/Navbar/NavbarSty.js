import styled from "styled-components";

export const NavbarContainerSty = styled.div`
    height: 100px;
    background-color: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 6px -6px rgb(255,255,255)
`

export const LinksContainerSty = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    a{
        padding: 1rem 1.5rem
    }

    `

export const LinkContainerSty = styled.div`
    font-size: 2rem;
    cursor: pointer;
    
`

export const LogoSty = styled.img`
    height:100px;
    cursor: pointer;
`

export const UserNavSty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  span {
    position: absolute;
    color: white;
    font-size: 1.2rem;
    margin-left: 8px;
    margin-top: 15px
  }
`;