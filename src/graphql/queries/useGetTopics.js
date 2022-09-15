import { gql, useQuery } from "@apollo/client";

// export const GET_GIT_TOPICS = gql`
//     query SearchTopics($search: String!) {
//         search(query: $search, type: ISSUE, first: 10) {
//             repositoryCount
//             nodes {
//                 ... on Repository {
//                     id
//                     name
//                     stargazerCount
//                     resourcePath
//                     repositoryTopics(first: 10) {
//                         totalCount
//                         nodes {
//                             id
//                             topic {
//                                 name
//                                 stargazerCount
//                                 relatedTopics {
//                                     name
//                                     stargazerCount
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;

export const GET_GIT_TOPICS = gql`
    query SearchTopics($search: String!) {
        topic(name: $search) {
            name
            stargazerCount
            relatedTopics {
                name
                stargazerCount
                relatedTopics {
                    name
                    stargazerCount
                }
            }
        }
    }
`;

export const useGetTopics = (search) =>
    useQuery(GET_GIT_TOPICS, {
        variables: { search },
    });
