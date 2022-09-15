import styled from "styled-components";
import Span from "components/Basic/Span";
import Topic from "components/Topic/Topic";
import Flex from "components/Basic/Flex";
import Container from "components/Basic/Container";
import { useGetTopics } from "graphql/queries/useGetTopics";

const SearchResultContainer = styled.div`
    flex: 1;
    padding: 2rem;
    flex-direction: column;
    background-color: #0d1117;
`;

const TopicTermLabel = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    background-color: #12233a;
    border-radius: 0.2rem;
`;

const SearchResult = ({ searchTerm, onRelatedTopicClick }) => {
    const { loading, error, data } = useGetTopics(searchTerm);

    console.log("data", data);

    return (
        <SearchResultContainer data-testid="data-search-result">
            <Container>
                <Flex alignItems="center" marginTop="2" marginBottom="2">
                    <TopicTermLabel>#</TopicTermLabel>
                    <Span
                        fontSize={"2"}
                        marginLeft={"1"}
                        bold
                        data-testid="data-search-term"
                    >
                        {searchTerm}
                    </Span>
                </Flex>
                {error && (
                    <Span fontSize={2}>Sorry, something went wrong.</Span>
                )}
                {loading && <Span fontSize={2}>Loading...</Span>}
                {data && data.search.nodes.length === 0 && (
                    <Span fontSize={2}>
                        Looks like there is no result what you are looking for.
                    </Span>
                )}
                {data &&
                    data.search.nodes.length > 0 &&
                    data.search.nodes.map((node) => (
                        <Topic
                            key={node.id}
                            topic={node}
                            onRelatedTopicClick={onRelatedTopicClick}
                        />
                    ))}
            </Container>
        </SearchResultContainer>
    );
};

export default SearchResult;
