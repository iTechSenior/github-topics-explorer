import { useState } from "react";
import "./Header.css";

const Header = ({ searchTerm, onSearch }) => {
    const [inputValue, setInputValue] = useState(searchTerm);

    const handleInputChnage = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(inputValue);
    };

    return (
        <div className="header" data-testid="data-header">
            <span className="header-title">Github Topic Explorer</span>
            <div className="search">
                <input
                    className="search-input"
                    data-testid="data-search-input"
                    value={inputValue}
                    onChange={handleInputChnage}
                />
                <button
                    className="search-button"
                    onClick={handleSearchClick}
                    data-testid="data-search-button"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Header;
