# Github Topic Explorer Test Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ScreenShot
![Github GraphQL Explorer (1)](https://user-images.githubusercontent.com/48595430/190450222-29b0d9ec-ab52-470c-bde3-aea90b268027.png)
![Github GraphQL Explorer (2)](https://user-images.githubusercontent.com/48595430/190450234-b5c5d587-1bc8-489a-b0ec-1971fa8280eb.png)
![Github GraphQL Explorer (3)](https://user-images.githubusercontent.com/48595430/190450247-b796acd3-e075-4f31-9d60-d492869f9ebe.png)
![Github GraphQL Explorer (4)](https://user-images.githubusercontent.com/48595430/190450257-7beda1ba-418a-4b82-9eea-b4c6d3be43cd.png)
![Github GraphQL Explorer](https://user-images.githubusercontent.com/48595430/190450267-1d8359f7-3304-4a54-bcb4-461ad5e1afa5.png)
![Github GraphQL Explorer (5)](https://user-images.githubusercontent.com/48595430/190451557-29ebb292-05e4-4b00-b32c-a8d00b5287d5.png)



## Installation

1. Paste your `github api access token` to `.env` file.
    - First, create a .env file in the root folder.
    - And you should create a variable called `REACT_APP_GITHUB_API_ACCESS_TOKEN` in the .env file and paste your `token` to it.
    - Don't change the variable name.
2. yarn install
3. yarn start


## Dependencies added

-   GraphQL and Apollo Client to fetch the data using Github GraphQL API.
-   styled-components for styles

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
