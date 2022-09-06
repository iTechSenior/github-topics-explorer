# Github Topic Explorer Test Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

1. Paste your `github api access token` to `.env` file.
    - First, create a .env file in the root folder.
    - And you should create a variable called `REACT_APP_GITHUB_API_ACCESS_TOKEN` in the .env file and paste your `token` to it.
    - Don't change the variable name.
2. yarn install
3. yarn start


## Dependencies added

-   GraphQL and Apollo Client to fetch the data using Github GraphQL API.

## Implementation

1.  Fetch the first 10 repositories related to `react` topic and list them by default.
2.  Search Functionality
    -   User can search on any term or topic.
    -   It fetches the first 10 results when user click on related topic badge
3.  Unit Test

## Notes

-   Didn't use react routing and didn't implement a click on Topic to display related `topics` and `stargazerCounts`
-   Instead, tried to show related `topics` and `stargazerCounts` in topic component by default if the topic has any. (similar to the workflow of github website)
-   When user click on related topic badge, it fetches the first 10 repos related to that topic.

## Future Improvments

-   Didn't implement infinite scroll to load more data.
