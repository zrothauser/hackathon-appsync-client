import React, { Component } from 'react';
import { graphql } from "react-apollo";

import inboxSubscriptionAll from '../../graphql/inboxSubscriptionAll'

class Inbox extends Component {
    render() {
        const messageBody = this.props.data && this.props.data.inbox && this.props.data.inbox.body;
        console.log('new comment: ', messageBody);
        return (
            <div>
                {messageBody}
            </div>
        );
    }
}

export default graphql(inboxSubscriptionAll)(Inbox);
