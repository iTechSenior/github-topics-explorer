import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

const token = process.env.REACT_APP_GITHUB_API_ACCESS_TOKEN;

const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
        authorization: token ? `Bearer ${token}` : "",
    },
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([httpLink]),
});
