import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 36px;
    flex-direction: column;
    align-items: center;
`;

const ImageWrapper = styled.div`
    width: 50%;
`;

const Text = styled.p`
    text-align: center;
    max-width: 800px;
`;

const AboutPage = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <StaticImage
                    style={{ borderRadius: "50%" }}
                    aspectRatio={1 / 1}
                    src={"../../images/fanny.jpeg"}
                    alt="alt"
                    placeholder="blurred"
                />
            </ImageWrapper>
            <h1 style={{ textAlign: "center" }}>Om mig</h1>
            <Text>
                [32] Sed ut perspiciatis, unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam
                eaque ipsa, quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,
                quia voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
                dolor sit amet consectetur adipisci[ng] velit, sed quia non
                numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore
                magnam aliquam quaerat voluptatem.
            </Text>
            <Text>
                Sed ut perspiciatis, unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam
                eaque ipsa, quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,
                quia voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
                dolor sit amet consectetur adipisci[ng] velit, sed quia non
                numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore
                magnam aliquam quaerat voluptatem.
            </Text>
        </Wrapper>
    );
};

export default AboutPage;
