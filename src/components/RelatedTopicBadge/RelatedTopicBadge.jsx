import styled from "styled-components";
import Image from "components/Basic/Image";
import Span from "components/Basic/Span";
import Flex from "components/Basic/Flex";

const BadgeContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.3rem 1rem;
    margin: 0.25rem 0.25rem;
    background-color: #12233a;
    border-radius: 1rem;
    transition: all ease 0.3s;

    &:hover {
        background-color: #1f70eb;
        cursor: pointer;
    }

    &:hover > span {
        color: white;
    }
`;

const RelatedTopicBadge = ({ topic, onClick }) => {
    const { name, stargazerCount } = topic;

    const handleClick = () => {
        onClick(name);
    };

    return (
        <BadgeContainer onClick={handleClick} data-testid="data-relatedtopic">
            <Span fontSize={"0.8"} color={"#58a6ff"} bold>
                {name}
            </Span>
            <Flex alignItems="center" marginLeft="0.5">
                <Image
                    src="/star.png"
                    width={"0.9"}
                    height={"0.9"}
                    alt="star"
                />
                <Span
                    fontSize={"0.8"}
                    color={"#faca28"}
                    marginLeft={"0.1"}
                    bold
                >
                    {stargazerCount}
                </Span>
            </Flex>
        </BadgeContainer>
    );
};

export default RelatedTopicBadge;
