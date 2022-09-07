import styled from "styled-components";
import Container from "components/Basic/Container";
import Span from "components/Basic/Span";
import Flex from "components/Basic/Flex";

const FooterContainer = styled.div`
    background-color: #161b22;
    padding: 2rem;
`;

const Footer = () => {
    return (
        <FooterContainer data-testid="data-footer">
            <Container>
                <Flex justifyContent="center" alignItems="center">
                    <Span bold>Frontend Test Assignment by Chris</Span>
                </Flex>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
