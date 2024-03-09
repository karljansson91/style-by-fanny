import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const LeftColumn = styled.div`
    flex: 1;
`;

const RightColumn = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    margin: 0;
`;

const Text = styled.p`
    max-width: 500px;
    padding-right: 24px;
`;

const SliderRow = ({ title, body, images }) => {
    return (
        <>
            <LeftColumn>
                <Title>{title}</Title>
                <Text>{body}</Text>
            </LeftColumn>
            <RightColumn>
                <Splide
                    options={{
                        perPage: 1,
                        heightRatio: 0.5,
                    }}
                >
                    {images.map((image) => (
                        <SplideSlide key={image.key}>{image.img}</SplideSlide>
                    ))}
                </Splide>
            </RightColumn>
        </>
    );
};

export default SliderRow;
