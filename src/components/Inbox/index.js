import React from 'react';
import { graphql } from 'react-apollo';

import inboxSubscriptionAll from '../../graphql/inboxSubscriptionAll';

const Inbox = () => {
  const messageBody = this.props.data && this.props.data.inbox && this.props.data.inbox.body;
  console.log('new comment: ', messageBody); // eslint-disable-line no-console
  return (
    <div>
      {messageBody}
    </div>
  );
};

export default graphql(inboxSubscriptionAll)(Inbox);
