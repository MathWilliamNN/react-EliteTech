import styled from "styled-components"
import Logo from "./Logo"
import NavLink from "./NavLink"
import { FaCartShopping } from "react-icons/fa6";

const StyledNavBar = styled.nav`
    background-color: #000000;
    max-height: 72px;
    padding: 20px;


`
const StyledDivLogo = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    margin-left: 100px;
`

const StyledCartIcon = styled(FaCartShopping)`
    margin-left: 130vh;
    font-size: 30px; 
`


const NavigationBar = () => {
    return (
        <header>
            <StyledNavBar>
                <StyledDivLogo>
                    <Logo />
                    <NavLink to={'/'}> Home </NavLink>
                    <NavLink to={'/sales'}> Sales </NavLink>
                    <NavLink to={'/shoppingcart'}>
                        <StyledCartIcon />
                    </NavLink>
                </StyledDivLogo>
            </StyledNavBar>
        </header>
    )

}

export default NavigationBar