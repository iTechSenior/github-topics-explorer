import App from "../App";
import { MockedProvider } from "@apollo/client/testing";

import { screen, render } from "@testing-library/react";

const mocks = [];

describe("App", () => {
    test("should render App component correctly", () => {
        render(
            <MockedProvider
                mocks={mocks}
                addTypename={false}
                defaultOptions={{ watchQuery: { fetchPolicy: "no-cache" } }}
            >
                <App />
            </MockedProvider>
        );

        expect(screen.getByTestId("data-header")).toBeInTheDocument();
        expect(screen.getByTestId("data-search-result")).toBeInTheDocument();
        expect(screen.getByTestId("data-footer")).toBeInTheDocument();
    });
});
