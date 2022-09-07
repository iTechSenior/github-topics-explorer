import styled from "styled-components";

const StyledSpan = styled.span`
    font-size: ${(props) => (props.fontSize ? props.fontSize + "rem" : "1rem")};
    color: ${(props) => (props.color ? props.color : "white")};
    font-weight: ${(props) =>
        props.bold ? "bold" : props.fontWeight ? props.fontWeight : "400"};

    margin-left: ${(props) =>
        props.marginLeft ? props.marginLeft + "rem" : 0};
    margin-right: ${(props) =>
        props.marginLeft ? props.marginRight + "rem" : 0};
`;

const Span = (props) => {
    const {
        fontSize,
        color,
        bold,
        marginLeft,
        marginRight,
        children,
        fontWeight,
    } = props;

    return (
        <StyledSpan
            fontSize={fontSize}
            color={color}
            bold={bold}
            fontWeight={fontWeight}
            marginLeft={marginLeft}
            marginRight={marginRight}
        >
            {children}
        </StyledSpan>
    );
};

export default Span;
