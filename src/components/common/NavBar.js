import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import { media, palette as p } from 'styles';

const Container = styled.header`
    padding: 0 34px 0 24px;
    height: 52px;
    background: ${p.darkblue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    color: ${p.white};

    ${media.tablet`
        flex-direction: column;
        height: 88px;
        padding: 10px 0;
    `};

    & .title {
        font-weight: 600;
        font-size: 22px;

        ${media.tablet`
            font-size: 19px;
        `};
    }

    & .nav-link {
        font-size: 15px;
        width: 320px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${media.tablet`
            font-size: 16px;
            width: 100%;
            padding: 0 30px;
        `};

        & a {
            display: inline-block;
            padding: 5px;

            &:hover {
                color: ${p.gray};
            }
        }

        & .fa-external-link-alt {
            color: ${p.gray};
            margin-left: 3.2px;
            vertical-align: 1.6px;
        }
    }
`;

const NavItem = styled(NavLink)`
    padding: 5px;

    &.active {
        color: ${p.gray};
    }

    &:hover {
        color: ${p.gray};
    }
`;

const NavBar = () => {
    return (
        <Container>
            <div className="title">
                <Link to="/">한국어 암호화</Link>
            </div>
            <div className="nav-link">
                <NavItem exact to="/" activeClassName="active">
                    Home
                </NavItem>
                <NavItem to="/encrypt" activeClassName="active">
                    Encrypt
                </NavItem>
                <NavItem to="/about" activeClassName="active">
                    About
                </NavItem>
                <a
                    href="https://github.com/samnoh/korean-encryption"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub <i className="fas fa-external-link-alt fa-xs" />
                </a>
            </div>
        </Container>
    );
};

export default NavBar;
