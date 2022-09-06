import "./RelatedTopicBadge.css";

const RelatedTopicBadge = ({ topic, onClick }) => {
    const { name, stargazerCount } = topic;

    const handleClick = () => {
        onClick(name);
    };

    return (
        <div
            className="related-topic-badge"
            onClick={handleClick}
            data-testid="data-relatedtopic"
        >
            <span className="related-topic-name">{name}</span>
            <div className="related-topic-star">
                <img
                    className="related-topic-star-icon"
                    src="/star.png"
                    alt="star"
                />
                <span className="related-topic-stargazer-count">
                    {stargazerCount}
                </span>
            </div>
        </div>
    );
};

export default RelatedTopicBadge;
