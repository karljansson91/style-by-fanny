import * as React from "react";
import styled from "styled-components";
import Instagram from "../../../assets/instagram.svg";
import Facebook from "../../../assets/facebook.svg";

const Wrapper = styled.div`
    width: 100%;
    background-color: #e2cfc6;
    display: flex;
    flex-direction: row;
    padding: 32px 0px;
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const FooterText = styled.p`
    margin: 2px;
    text-align: left;
`;

const Logo = styled.div`
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    margin-right: 20px;
`;

const IconRow = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
`;

const IconWrapper = styled.a`
    width: 32px;
`;

const Footer = () => {
    return (
        <Wrapper>
            <ColumnWrapper>
                <div>
                    <FooterText>STYLING</FooterText>
                    <FooterText>INREDNING</FooterText>
                    <FooterText>HOMESTAGING</FooterText>
                    <FooterText>PRIVAT MILJÖ</FooterText>
                    <FooterText>OFFENTLIG MILJÖ</FooterText>
                </div>
            </ColumnWrapper>
            <ColumnWrapper>
                <Logo />
            </ColumnWrapper>
            <ColumnWrapper>
                <div>
                    <FooterText>KONTAKT</FooterText>
                    <FooterText>fannya.sjoberg@gmail.com</FooterText>
                    <FooterText>076-828 88 32</FooterText>
                    <IconRow>
                        <IconWrapper href="https://stackoverflow.com/questions/63636758/how-do-i-resize-and-svg-logo-in-react-gatsby">
                            <Instagram />
                        </IconWrapper>
                        <IconWrapper href="https://stackoverflow.com/questions/63636758/how-do-i-resize-and-svg-logo-in-react-gatsby">
                            <Facebook />
                        </IconWrapper>
                    </IconRow>
                </div>
            </ColumnWrapper>
        </Wrapper>
    );
};

export default Footer;
