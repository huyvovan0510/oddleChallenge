import {GraphClientQuery} from './graphCms';
import {gql} from 'graphql-request';

const getProducts = async () => {
  try {
    const result = await GraphClientQuery(
      gql`
        query products($last: Int) {
          result: products(last: $last) {
            id
            name
            brand
            price
            stage
            apiFeaturedImage
            productLink
            rating
            websiteLink
            tagList
            category
            productType
          }
        }
      `,
      {
        last: 20,
      },
    );
    return result;
  } catch (error) {
    console.log('🚀 ~ file: Api.js ~ line 31 ~ getProducts ~ error', error);
    return null;
  }
};

export {getProducts};
