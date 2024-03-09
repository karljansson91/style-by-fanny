import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const MaxWidthWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
`;

const PaddingWrapper = styled.div`
    padding: 32px 16px;
`;

// Create the layout component
const Layout = ({ children }) => {
    return (
        <Wrapper>
            <MaxWidthWrapper>
                <PaddingWrapper>
                    <Header />
                    {children}
                </PaddingWrapper>
            </MaxWidthWrapper>
            <Footer />
        </Wrapper>
    );
};

export default Layout;
