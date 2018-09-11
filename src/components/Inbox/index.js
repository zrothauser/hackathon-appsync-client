import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import inboxSubscriptionAll from '../../graphql/inboxSubscriptionAll';

const Inbox = (props) => {
  const messageBody = props.data.inbox && props.data.inbox.body;
  console.log('new comment: ', messageBody); // eslint-disable-line no-console
  return (
    <div>
      {messageBody}
    </div>
  );
};

Inbox.defaultProps = {
  data: {
    inbox: {},
  },
};

Inbox.propTypes = {
  data: PropTypes.shape({
    inbox: {},
  }),
};

export default graphql(inboxSubscriptionAll)(Inbox);
