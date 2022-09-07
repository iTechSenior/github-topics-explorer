import SearchResult from "components/SearchResult/SearchResult";
import { MockedProvider } from "@apollo/client/testing";
import { act, screen, render } from "@testing-library/react";
import { GET_GIT_TOPICS } from "graphql/queries/useGetTopics";
import { GraphQLError } from "graphql";

describe("Topic", () => {
    test("should render Loading state and data correctly", async () => {
        const mocks = {
            request: {
                query: GET_GIT_TOPICS,
                variables: { search: "react" },
            },
            result: () => {
                return {
                    data: {
                        search: {
                            repositoryCount: 3544534,
                            nodes: [
                                {
                                    id: 1,
                                    name: "react",
                                    repositoryTopics: {
                                        nodes: [
                                            {
                                                id: "rt-1",
                                                topic: {
                                                    name: "javascript",
                                                    relatedTopics: [
                                                        {
                                                            name: "nodejs",
                                                            stargazerCount: 59394,
                                                        },
                                                        {
                                                            name: "docker",
                                                            stargazerCount: 53394,
                                                        },
                                                        {
                                                            name: "elixir",
                                                            stargazerCount: 59294,
                                                        },
                                                    ],
                                                    stargazerCount: 433231,
                                                },
                                            },
                                            {
                                                id: "rt-2",
                                                topic: {
                                                    name: "frontend",
                                                    relatedTopics: [
                                                        {
                                                            name: "nodejs",
                                                            stargazerCount: 59394,
                                                        },
                                                        {
                                                            name: "docker",
                                                            stargazerCount: 53394,
                                                        },
                                                        {
                                                            name: "elixir",
                                                            stargazerCount: 59294,
                                                        },
                                                    ],
                                                    stargazerCount: 7534523,
                                                },
                                            },
                                            {
                                                id: "rt-3",
                                                topic: {
                                                    name: "ui",
                                                    relatedTopics: [
                                                        {
                                                            name: "nodejs",
                                                            stargazerCount: 59394,
                                                        },
                                                        {
                                                            name: "docker",
                                                            stargazerCount: 53394,
                                                        },
                                                        {
                                                            name: "elixir",
                                                            stargazerCount: 59294,
                                                        },
                                                    ],
                                                    stargazerCount: 9532454,
                                                },
                                            },
                                        ],
                                        totalCount: 3,
                                    },
                                    resourcePath: "/facebook/react",
                                    stargazerCount: 123456,
                                },
                                {
                                    id: 2,
                                    name: "react",
                                    repositoryTopics: {
                                        nodes: [
                                            {
                                                id: "rt2-1",
                                                topic: {
                                                    name: "typescript",
                                                    relatedTopics: [
                                                        {
                                                            name: "nodejs",
                                                            stargazerCount: 59394,
                                                        },
                                                        {
                                                            name: "docker",
                                                            stargazerCount: 53394,
                                                        },
                                                        {
                                                            name: "elixir",
                                                            stargazerCount: 59294,
                                                        },
                                                    ],
                                                    stargazerCount: 547345,
                                                },
                                            },
                                            {
                                                id: "rt2-2",
                                                topic: {
                                                    name: "cheatsheet",
                                                    relatedTopics: [
                                                        {
                                                            name: "nodejs",
                                                            stargazerCount: 59394,
                                                        },
                                                        {
                                                            name: "docker",
                                                            stargazerCount: 53394,
                                                        },
                                                        {
                                                            name: "elixir",
                                                            stargazerCount: 59294,
                                                        },
                                                    ],
                                                    stargazerCount: 653454,
                                                },
                                            },
                                            {
                                                id: "rt2-3",
                                                topic: {
                                                    name: "guide",
                                                    relatedTopics: [
                                                        {
                                                            name: "nodejs",
                                                            stargazerCount: 59394,
                                                        },
                                                        {
                                                            name: "docker",
                                                            stargazerCount: 53394,
                                                        },
                                                        {
                                                            name: "elixir",
                                                            stargazerCount: 59294,
                                                        },
                                                    ],
                                                    stargazerCount: 21312,
                                                },
                                            },
                                        ],
                                        totalCount: 5,
                                    },
                                    resourcePath:
                                        "/typescript-cheatsheets/react",
                                    stargazerCount: 4423233,
                                },
                                {
                                    id: 3,
                                    name: "react",
                                    repositoryTopics: {
                                        nodes: [
                                            {
                                                id: "rt3-1",
                                                topic: {
                                                    name: "webpack",
                                                    relatedTopics: [
                                                        {
                                                            name: "nodejs",
                                                            stargazerCount: 59394,
                                                        },
                                                        {
                                                            name: "docker",
                                                            stargazerCount: 53394,
                                                        },
                                                        {
                                                            name: "elixir",
                                                            stargazerCount: 59294,
                                                        },
                                                    ],
                                                    stargazerCount: 3423224,
                                                },
                                            },
                                            {
                                                id: "rt3-2",
                                                topic: {
                                                    name: "antd",
                                                    relatedTopics: [
                                                        {
                                                            name: "nodejs",
                                                            stargazerCount: 59394,
                                                        },
                                                        {
                                                            name: "docker",
                                                            stargazerCount: 53394,
                                                        },
                                                        {
                                                            name: "elixir",
                                                            stargazerCount: 59294,
                                                        },
                                                    ],
                                                    stargazerCount: 56445,
                                                },
                                            },
                                            {
                                                id: "rt3-3",
                                                topic: {
                                                    name: "babel",
                                                    relatedTopics: [
                                                        {
                                                            name: "nodejs",
                                                            stargazerCount: 59394,
                                                        },
                                                        {
                                                            name: "docker",
                                                            stargazerCount: 53394,
                                                        },
                                                        {
                                                            name: "elixir",
                                                            stargazerCount: 59294,
                                                        },
                                                    ],
                                                    stargazerCount: 89678,
                                                },
                                            },
                                        ],
                                        totalCount: 7,
                                    },
                                    resourcePath: "/duxianwei520/react",
                                    stargazerCount: 7546546,
                                },
                            ],
                        },
                    },
                };
            },
        };

        const handleClick = jest.fn();

        render(
            <MockedProvider
                mocks={[mocks]}
                addTypename={false}
                defaultOptions={{ watchQuery: { fetchPolicy: "no-cache" } }}
            >
                <SearchResult
                    searchTerm="react"
                    onRelatedTopicClick={handleClick}
                />
            </MockedProvider>
        );

        expect(await screen.findByText("Loading...")).toBeInTheDocument();

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        expect(screen.queryAllByTestId("data-topic")).toHaveLength(3);
        expect(screen.queryAllByTestId("data-relatedtopic")).toHaveLength(9);
    });

    test("should render network error state", async () => {
        const mocks = {
            request: {
                query: GET_GIT_TOPICS,
                variables: { search: "react" },
            },
            error: new Error("An error occurred"),
        };

        const handleClick = jest.fn();

        render(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <SearchResult
                    searchTerm="react"
                    onRelatedTopicClick={handleClick}
                />
            </MockedProvider>
        );

        expect(
            await screen.findByText("Sorry, something went wrong.")
        ).toBeInTheDocument();
    });

    test("should render graphql error state", async () => {
        const mocks = {
            request: {
                query: GET_GIT_TOPICS,
                variables: { search: "react" },
            },
            result: {
                errors: [new GraphQLError("Error!")],
            },
        };

        const handleClick = jest.fn();

        render(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <SearchResult
                    searchTerm="react"
                    onRelatedTopicClick={handleClick}
                />
            </MockedProvider>
        );

        expect(
            await screen.findByText("Sorry, something went wrong.")
        ).toBeInTheDocument();
    });
});
