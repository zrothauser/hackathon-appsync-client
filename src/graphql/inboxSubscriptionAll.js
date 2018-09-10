import gql from 'graphql-tag';

export default gql`
subscription Inbox {
    inbox {
        from
        context
        body
    }
}`;
