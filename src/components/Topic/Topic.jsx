import React from "react";
import styled from "styled-components";
import RelatedTopicBadge from "components/RelatedTopicBadge/RelatedTopicBadge";
import Image from "components/Basic/Image";
import Span from "components/Basic/Span";
import Flex from "components/Basic/Flex";

const TopicContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-width: 1px;
    border-color: gray;
    border-style: solid;
    border-radius: 0.25rem;
    margin: 0.2rem 0;
    background-color: #161b22;

    @media (max-width: 730px) {
        padding: 0.7rem 0.7rem;
    }
`;

const Topic = ({ topic, onRelatedTopicClick }) => {
    const {
        resourcePath,
        stargazerCount,
        repositoryTopics: { nodes },
    } = topic;

    return (
        <TopicContainer data-testid="data-topic">
            <Flex
                alignItems="center"
                justifyContent="space-between"
                marginBottom="1"
                flexWrap="wrap"
            >
                <Span fontSize={"1.5"} color={"#58a6ff"} fontWeight={"500"}>
                    {resourcePath}
                </Span>
                <Flex alignItems="center">
                    <Image
                        src="/star.png"
                        width={"1.5"}
                        height={"1.5"}
                        alt="star"
                    />
                    <Span
                        fontSize={"1"}
                        color={"#faca28"}
                        marginLeft={"0.5"}
                        bold
                    >
                        {stargazerCount}
                    </Span>
                </Flex>
            </Flex>

            <Flex flexWrap="wrap" alignItems="center">
                {nodes.length > 0 &&
                    nodes.map((node) => (
                        <RelatedTopicBadge
                            key={node.id}
                            topic={node.topic}
                            onClick={onRelatedTopicClick}
                        />
                    ))}
            </Flex>
        </TopicContainer>
    );
};

export default React.memo(Topic);
