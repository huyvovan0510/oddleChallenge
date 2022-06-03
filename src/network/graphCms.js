import {GraphQLClient} from 'graphql-request';
import {GRAPHCMS_ENDPOINT, GRAPHCMS_TOKEN} from '../../appConfigs';

const client = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
  },
});

export const GraphClientQuery = async (query, params) => {
  return await client.request(query, params);
};
