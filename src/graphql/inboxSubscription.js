import gql from 'graphql-tag';

export default gql`
subscription Inbox($context: String) {
  inbox(context: $context) {
    from
    context
    body
  }
}`;
