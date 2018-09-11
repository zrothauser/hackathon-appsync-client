import gql from 'graphql-tag';

export default gql`
mutation CreateMessage($message: CreateMessageInput!) {
    createMessage(input: $message){
    id
    context
    body
    sentAt
  }
}`;
