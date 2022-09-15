import { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "components/Basic/Container";
import Span from "components/Basic/Span";
import Flex from "components/Basic/Flex";

const HeaderContainer = styled.div`
    padding: 2rem;
    background-color: #161b22;
`;

const SearchInput = styled.input`
    outline: none;
    border: 1px solid gray;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: white;
    padding: 0.5rem 0.5rem;
    background-color: #0d1117;
`;

const SearchButton = styled.button`
    border: none;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid gray;
    transition: all 0.3s ease-out;

    &:hover {
        background-color: #1f70eb;
    }
`;

const Header = ({ searchTerm, onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue(searchTerm);
    }, [searchTerm]);

    const handleInputChnage = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(inputValue);
    };

    return (
        <HeaderContainer data-testid="data-header">
            <Container>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Span fontSize={"2"} bold>
                        Github Topic Explorer
                    </Span>
                    <Flex
                        alignItems="center"
                        marginTop="0.5"
                        marginBottom="0.5"
                    >
                        <SearchInput
                            data-testid="data-search-input"
                            value={inputValue}
                            onChange={handleInputChnage}
                        />
                        <SearchButton
                            onClick={handleSearchClick}
                            data-testid="data-search-button"
                        >
                            Search
                        </SearchButton>
                    </Flex>
                </Flex>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
