import "@splidejs/react-splide/css";
import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SliderRow from "../../components/SliderRow";

const Wrapper = styled.div`
    padding: 36px 0px;
`;
const SliderWrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 24px;
`;

const images = [
    {
        img: (
            <StaticImage
                style={{ height: "100%" }}
                src={"../../images/test.jpeg"}
                alt="alt"
                placeholder="blurred"
                translate={{ fit: "cover", cropFocus: "attention" }}
                key="0"
            />
        ),
        key: "0",
    },
    {
        img: (
            <StaticImage
                style={{ height: "100%" }}
                src={"../../images/test1.webp"}
                alt="alt"
                placeholder="blurred"
                translate={{ fit: "contain", cropFocus: "attention" }}
                key="1"
            />
        ),
        key: "1",
    },
    {
        img: (
            <StaticImage
                style={{ height: "100%" }}
                src={"../../images/test2.jpeg"}
                alt="alt"
                placeholder="blurred"
                translate={{ fit: "contain", cropFocus: "attention" }}
                key="2"
            />
        ),
        key: "2",
    },
    {
        img: (
            <StaticImage
                style={{ height: "100%" }}
                src={"../../images/test3.jpeg"}
                alt="alt"
                placeholder="blurred"
                translate={{ fit: "contain", cropFocus: "attention" }}
                key="3"
            />
        ),
        key: "3",
    },
    {
        img: (
            <StaticImage
                style={{ height: "100%" }}
                src={"../../images/test2.jpeg"}
                alt="alt"
                placeholder="blurred"
                translate={{ fit: "contain", cropFocus: "attention" }}
                key="4"
            />
        ),
        key: "4",
    },
];

const Tanster = () => {
    return (
        <Wrapper>
            <SliderWrapper>
                <SliderRow
                    title="Inför försäljning"
                    body="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem."
                    images={images}
                />
            </SliderWrapper>
            <SliderWrapper>
                <SliderRow
                    title="Stor inredning"
                    body="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem."
                    images={images}
                />
            </SliderWrapper>

            <SliderWrapper>
                <SliderRow
                    title="Liten inredning"
                    body="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem."
                    images={images}
                />
            </SliderWrapper>
        </Wrapper>
    );
};

export default Tanster;

export const Head = () => <title>Home Page</title>;
