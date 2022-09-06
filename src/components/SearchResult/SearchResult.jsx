import Topic from "components/Topic/Topic";
import { useGetTopics } from "graphql/queries/useGetTopics";
import "./SearchResult.css";

const SearchResult = ({ searchTerm, onRelatedTopicClick }) => {
    const { loading, error, data } = useGetTopics(searchTerm);

    return (
        <div className="search-result" data-testid="data-search-result">
            <div className="topic-term">
                <span className="label">#</span>
                <span className="term" data-testid="data-search-term">
                    {searchTerm}
                </span>
            </div>
            {error && <span className="search-error">{error.message}</span>}
            {loading && <span className="search-loading">Loading...</span>}
            {data &&
                data.search.nodes.map((node) => (
                    <Topic
                        key={node.id}
                        topic={node}
                        onRelatedTopicClick={onRelatedTopicClick}
                    />
                ))}
        </div>
    );
};

export default SearchResult;
