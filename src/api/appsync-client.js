import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";

import APPSYNC_CONFIG from '../appsync-config';

export default new AWSAppSyncClient({
    url: APPSYNC_CONFIG.graphqlEndpoint,
    region: APPSYNC_CONFIG.region,
    auth: {
      type: APPSYNC_CONFIG.authenticationType,
      apiKey: APPSYNC_CONFIG.apiKey,
    },
    cacheOptions: {
      dataIdFromObject: (obj) => {
        let id = defaultDataIdFromObject(obj);

        if (!id) {
          const { __typename: typename } = obj;
          switch (typename) {
            case 'Comment':
              return `${typename}:${obj.commentId}`;
            default:
              return id;
          }
        }

        return id;
      }
    }
  });