import { useState } from "react";

import SearchResult from "components/SearchResult/SearchResult";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import "./App.css";

function App() {
    const [searchTerm, setSearchTerm] = useState("react");

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <div className="app">
            <Header searchTerm={searchTerm} onSearch={handleSearch} />
            <SearchResult
                searchTerm={searchTerm}
                onRelatedTopicClick={handleSearch}
            />
            <Footer />
        </div>
    );
}

export default App;
