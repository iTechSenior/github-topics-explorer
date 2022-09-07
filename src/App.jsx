import { useState } from "react";
import styled from "styled-components";

import SearchResult from "components/SearchResult/SearchResult";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const StyledAppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

function App() {
    const [searchTerm, setSearchTerm] = useState("react");

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <StyledAppContainer>
            <Header searchTerm={searchTerm} onSearch={handleSearch} />
            <SearchResult
                searchTerm={searchTerm}
                onRelatedTopicClick={handleSearch}
            />
            <Footer />
        </StyledAppContainer>
    );
}

export default App;
