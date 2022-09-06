import Topic from "components/Topic/Topic";

import { screen, render } from "@testing-library/react";

const TOPIC_1 = {
    resourcePath: "/facebook/react",
    stargazerCount: 35000,
    repositoryTopics: {
        nodes: [
            {
                id: "rt_1",
                topic: "frontend",
            },
            {
                id: "rt_2",
                topic: "javascript",
            },
        ],
    },
};

const TOPIC_2 = {
    resourcePath: "/facebook/react",
    stargazerCount: 35000,
    repositoryTopics: {
        nodes: [],
    },
};

describe("Topic", () => {
    test("should render Topic component correctly and 2 RelatedTopicBadge components", () => {
        const onRelatedTopicClick = jest.fn();

        render(<Topic topic={TOPIC_1} onSearch={onRelatedTopicClick} />);

        const relatedTopic = screen.queryAllByTestId("data-relatedtopic");

        expect(screen.getByText("/facebook/react")).toBeInTheDocument();
        expect(screen.getByText("35000")).toBeInTheDocument();
        expect(relatedTopic).toHaveLength(2);
    });

    test("shouldn't render any RelatedTopicBadge component", () => {
        const onRelatedTopicClick = jest.fn();

        render(<Topic topic={TOPIC_2} onSearch={onRelatedTopicClick} />);

        const relatedTopic = screen.queryAllByTestId("data-relatedtopic");

        expect(screen.getByText("/facebook/react")).toBeInTheDocument();
        expect(screen.getByText("35000")).toBeInTheDocument();
        expect(relatedTopic).toHaveLength(0);
    });
});
