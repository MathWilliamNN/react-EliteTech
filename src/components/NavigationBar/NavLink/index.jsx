import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components';


const StyledLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 200;
    font-size:18px;
    
    &:hover{
        color: cyan
    }

    ${({ to, location }) =>
    to === location.pathname &&
    `
    text-decoration: underline;
  `}
`;



const NavLink = ({children, to}) => {
    const location = useLocation();
    return (
        <StyledLink to={to} location={location}>
            {children}
        </StyledLink>
    )
}

export default NavLink