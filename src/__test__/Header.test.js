import Header from "components/Header/Header";
import userEvent from "@testing-library/user-event";

import { screen, render } from "@testing-library/react";

describe("Header", () => {
    test("should render Header component correctly", () => {
        const onSearch = jest.fn();

        render(<Header searchTerm={"react"} onSearch={onSearch} />);

        expect(screen.getByTestId("data-header")).toHaveTextContent(
            "Github Topic Explorer"
        );
        expect(screen.getByTestId("data-search-input")).toBeInTheDocument();
        expect(screen.getByTestId("data-search-button")).toBeInTheDocument();
    });

    test("should input search term correctly", async () => {
        const onSearch = jest.fn();

        render(<Header searchTerm="react" onSearch={onSearch} />);

        userEvent.clear(screen.getByTestId("data-search-input"));
        userEvent.type(screen.getByTestId("data-search-input"), "vue");

        expect(screen.getByTestId("data-search-input")).toHaveValue("vue");
    });

    test("should button clickable and call callback func with search term (react)", () => {
        const onSearch = jest.fn();

        render(<Header searchTerm="react" onSearch={onSearch} />);

        userEvent.click(screen.getByTestId("data-search-button"));

        expect(onSearch).toHaveBeenCalledWith("react");
    });
});
