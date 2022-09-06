import React from "react";
import RelatedTopicBadge from "components/RelatedTopicBadge/RelatedTopicBadge";
import "./Topic.css";

const Topic = ({ topic, onRelatedTopicClick }) => {
    const {
        resourcePath,
        stargazerCount,
        repositoryTopics: { nodes },
    } = topic;

    return (
        <div className="topic" data-testid="data-topic">
            <div className="topic-title">
                <span className="topic-path">{resourcePath}</span>
                <div className="topic-star">
                    <img className="star-icon" src="/star.png" alt="star" />
                    <span className="stargazer-count">{stargazerCount}</span>
                </div>
            </div>

            <div className="related-topics">
                {nodes.length > 0 &&
                    nodes.map((node) => (
                        <RelatedTopicBadge
                            key={node.id}
                            topic={node.topic}
                            onClick={onRelatedTopicClick}
                        />
                    ))}
            </div>
        </div>
    );
};

export default React.memo(Topic);
