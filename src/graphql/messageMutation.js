import gql from 'graphql-tag';

export default gql`
mutation Mesage($context: String!, $body: String!) {
    message(context: $context, body: $body) {
        body
        context
        from
        sentAt
    }
}`;
