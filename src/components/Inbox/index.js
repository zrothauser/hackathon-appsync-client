import React from 'react';
import { graphql } from 'react-apollo';

import inboxSubscriptionAll from '../../graphql/inboxSubscriptionAll';

const Inbox = (props) => {
  const messageBody = props.data && props.data.inbox && props.data.inbox.body;
  console.log('new comment: ', messageBody); // eslint-disable-line no-console
  return (
    <div>
      {messageBody}
    </div>
  );
};

export default graphql(inboxSubscriptionAll)(Inbox);
