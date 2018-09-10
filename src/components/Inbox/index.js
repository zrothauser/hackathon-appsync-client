import React, { Component } from 'react';
import { graphql } from "react-apollo";

import inboxSubscriptionAll from '../../graphql/inboxSubscriptionAll'

class Inbox extends Component {
    render() {
        console.log(this.props.data);

        return (
            <div>
                {this.props.data && this.props.data.inbox && this.props.data.inbox.body}
            </div>
        );
    }
}

export default graphql(inboxSubscriptionAll)(Inbox);
