import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${(props) =>
        props.flexDirection ? props.flexDirection : "row"};
    align-items: ${(props) =>
        props.alignItems ? props.alignItems : "flex-start"};
    justify-content: ${(props) =>
        props.justifyContent ? props.justifyContent : "flex-start"};
    flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "no-wrap")};

    margin-top: ${(props) => (props.marginTop ? props.marginTop + "rem" : 0)};
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom + "rem" : 0};
    margin-left: ${(props) =>
        props.marginLeft ? props.marginLeft + "rem" : 0};
    margin-right: ${(props) =>
        props.marginLeft ? props.marginRight + "rem" : 0};

    padding-top: ${(props) =>
        props.paddingTop ? props.paddingTop + "rem" : 0};
    padding-bottom: ${(props) =>
        props.paddingBottom ? props.paddingBottom + "rem" : 0};
    padding-left: ${(props) =>
        props.paddingLeft ? props.paddingLeft + "rem" : 0};
    padding-right: ${(props) =>
        props.paddingLeft ? props.paddingRight + "rem" : 0};
`;

const Flex = (props) => {
    const {
        flexDirection,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        children,
        alignItems,
        justifyContent,
        flexWrap,
    } = props;

    return (
        <StyledFlex
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
            flexWrap={flexWrap}
            marginLeft={marginLeft}
            marginRight={marginRight}
            marginTop={marginTop}
            marginBottom={marginBottom}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
        >
            {children}
        </StyledFlex>
    );
};

export default Flex;
