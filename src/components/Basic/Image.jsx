import styled from "styled-components";

const StyledImage = styled.img`
    width: ${(props) => (props.width ? props.width + "rem" : "1rem")};
    height: ${(props) => (props.height ? props.height + "rem" : "1rem")};
`;

const Image = ({ src, width, height, alt }) => {
    return <StyledImage src={src} width={width} height={height} alt={alt} />;
};

export default Image;
