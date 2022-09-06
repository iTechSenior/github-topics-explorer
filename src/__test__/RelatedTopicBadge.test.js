import RelatedTopicBadge from "components/RelatedTopicBadge/RelatedTopicBadge";
import userEvent from "@testing-library/user-event";

import { screen, render } from "@testing-library/react";

const TOPIC_1 = {
    name: "javascript",
    stargazerCount: 87500,
};

describe("Topic", () => {
    test("should render RelatedTopicBadge component correctly", () => {
        const handleClick = jest.fn();

        render(<RelatedTopicBadge topic={TOPIC_1} onClick={handleClick} />);

        expect(screen.getByText("javascript")).toBeInTheDocument();
        expect(screen.getByText("87500")).toBeInTheDocument();
    });

    test("should call callback with the topic name", () => {
        const handleClick = jest.fn();

        render(<RelatedTopicBadge topic={TOPIC_1} onClick={handleClick} />);

        userEvent.click(screen.getByTestId("data-relatedtopic"));

        expect(handleClick).toHaveBeenCalledWith("javascript");
    });
});
