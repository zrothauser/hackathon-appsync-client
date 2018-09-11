import gql from 'graphql-tag';

export default gql`
{
    posts {
        edges {
            node {
                title
                excerpt
                modified
                id
                slug
            }
        }
    }
}
`;
