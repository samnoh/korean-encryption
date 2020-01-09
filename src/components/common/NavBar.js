import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0 16px;
    height: 52px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0;

    & .title {
        font-size: 26px;
    }

    & .nav-link {
    }
`;

const NavItem = styled(NavLink)`
    &.active {
        font-weight: bold;
    }
`;

const NavBar = () => {
    return (
        <Container>
            <div className="title">
                <Link to="/">한국어 암호화</Link>
            </div>
            <div className="nav-link">
                <NavItem to="/" activeClassName="active">
                    Home
                </NavItem>
                <NavItem to="/about" activeClassName="active">
                    About
                </NavItem>
                <a
                    href="https://github.com/samnoh/korean-encryption"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </Container>
    );
};

export default NavBar;
