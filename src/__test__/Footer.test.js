import Footer from "components/Footer/Footer";

import { screen, render } from "@testing-library/react";

test("should render Footer component correctly", () => {
    render(<Footer />);

    expect(screen.getByTestId("data-footer")).toHaveTextContent(
        "Frontend Test Assignment"
    );
});
