import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";

export default function Header(isLight, handleToggleTheme) {
  const location = useLocation();
  console.log(location);
    return <Wrapper>
        <h1>Our super music app</h1>
          <nav>
            <Link to="/"><MenuEl isCurrentPage={location.pathname === "/"}>Home</MenuEl></Link>
            <Link to="/about"><MenuEl isCurrentPage={location.pathname === "/about"}>About</MenuEl></Link>
          </nav>
        <button onClick={handleToggleTheme}>Switch to {isLight ? "dark" : "light"} theme</button>
    </Wrapper>
}

const Wrapper = styled.header`
height: 80px;
display: flex;
justify-content: space-between;
padding: 0px 24px;
align-items: center;
border-bottom: solid 1px;
& a{
    text-decoration: none;
    color: inherit;
}
& a:first-child{
    margin-right: 12px;
}
`;

const MenuEl = styled.p`
padding: 10px;
&:hover {
  border-bottom: solid 2px;
}`;