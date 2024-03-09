import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
    width: 100%;
`;

const TopHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    width: 100px;
    height: 100px;
    background-color: #e2cfc6;
    border-radius: 50%;
    margin-right: 20px;
`;

const TopHeaderInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    border-bottom: 1px solid black;
    margin: 0;
    padding-bottom: 12px;
    letter-spacing: 0.3rem;
`;

const SubTitle = styled.p`
    padding-top: 24px;
    margin: 0;
`;

const NavigatorWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 12px;
    border-top: 1px dashed black;
    border-bottom: 1px dashed black;
    margin-top: 32px;
`;

const NavigatorLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

const HeaderNavigation = () => {
    return (
        <NavigatorWrapper>
            <NavigatorLink to="/about">OM MIG</NavigatorLink>
            <NavigatorLink to="/tjanster">TJÄNSTER</NavigatorLink>
            <NavigatorLink to="/projekt">PROJEKT</NavigatorLink>
            <NavigatorLink to="/kontakt">KONTAKT</NavigatorLink>
        </NavigatorWrapper>
    );
};

const Header = () => {
    return (
        <Wrapper>
            <TopHeader>
                <Link to="/">
                    <Logo />
                </Link>
                <TopHeaderInfoWrapper>
                    <Title>FANNY SJÖBERG INTERIÖR</Title>
                    <SubTitle>
                        INREDARE, STYLIST & HOMESTAGINGKONSULT FÖR PRIVAT OCH
                        OFFENTLIG MILJÖ
                    </SubTitle>
                </TopHeaderInfoWrapper>
            </TopHeader>
            <HeaderNavigation />
        </Wrapper>
    );
};

export default Header;
