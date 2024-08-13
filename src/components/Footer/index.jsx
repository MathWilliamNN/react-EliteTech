import styled from "styled-components"
import { FaRegCopyright } from "react-icons/fa";

const StyledFooter = styled.footer`
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: black;
    font-size: 14px;
    font-weight: 400px;
    color: white;
    height: 54px;
`

const Footer = () => {
    return(
        <StyledFooter>
            <p>2024 {<FaRegCopyright />} Inspired by Alura | Non-profit project</p>
        </StyledFooter>
    )
}

export default Footer