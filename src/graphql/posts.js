import gql from 'graphql-tag';

export default gql`
subscription Posts {
    posts {
        edges {
            node {
                title
                body
                author
                    id
                    name
                    username
                    description
                timestamp
                id
                name
            }
        }
    }
}`;
