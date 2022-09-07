import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
`;

const Container = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
