import React, { useEffect } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 36px;
`;

const LeftColumn = styled.div`
    flex: 3;
    padding-right: 12px;
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const images = [
    {
        img: (
            <StaticImage
                style={{ height: "100%", width: "100%" }}
                src={"../images/test.jpeg"}
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
                style={{ height: "100%", width: "100%" }}
                src={"../images/test1.webp"}
                alt="alt"
                placeholder="blurred"
                translate={{ fit: "cover", cropFocus: "attention" }}
                key="1"
            />
        ),
        key: "1",
    },
    {
        img: (
            <StaticImage
                style={{ height: "100%", width: "100%" }}
                src={"../images/test2.jpeg"}
                alt="alt"
                placeholder="blurred"
                translate={{ fit: "cover", cropFocus: "attention" }}
                key="2"
            />
        ),
        key: "2",
    },
    {
        img: (
            <StaticImage
                style={{ height: "100%", width: "100%" }}
                src={"../images/test3.jpeg"}
                alt="alt"
                placeholder="blurred"
                translate={{ fit: "cover", cropFocus: "attention" }}
                key="3"
            />
        ),
        key: "3",
    },
    {
        img: (
            <StaticImage
                style={{ height: "100%", width: "100%" }}
                src={"../images/test2.jpeg"}
                alt="alt"
                placeholder="blurred"
                translate={{ fit: "cover", cropFocus: "attention" }}
                key="4"
            />
        ),
        key: "4",
    },
];

const HomePage = () => {
    const refMain = React.useRef(null);
    const refThumbnail = React.useRef(null);

    useEffect(() => {
        if (
            refMain.current &&
            refThumbnail.current &&
            refThumbnail.current.splide
        ) {
            refMain.current.sync(refThumbnail.current.splide);
        }
    });

    return (
        <Wrapper>
            <LeftColumn>
                <Splide
                    ref={refMain}
                    options={{
                        perPage: 1,
                        heightRatio: 1,
                        type: "loop",
                        arrows: false,
                        speed: 500,
                    }}
                >
                    {images.map((image) => (
                        <SplideSlide key={image.key}>
                            <div
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    backgroundColor: "blue",
                                }}
                            >
                                {image.img}
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </LeftColumn>
            <RightColumn>
                <Splide
                    ref={refThumbnail}
                    options={{
                        perPage: 3,
                        perMove: 1,
                        direction: "ttb",
                        gap: "12px",
                        heightRatio: 3,
                        isNavigation: true,
                        cover: true,
                        autoplay: true,
                        interval: 3500,
                        speed: 500,
                        rewind: true,
                        focus: "center",
                    }}
                >
                    {images.map((image) => (
                        <SplideSlide key={image.key}>
                            <div
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    backgroundColor: "blue",
                                }}
                            >
                                {image.img}
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </RightColumn>
        </Wrapper>
    );
};

export default HomePage;

export const Head = () => <title>Home Page</title>;
