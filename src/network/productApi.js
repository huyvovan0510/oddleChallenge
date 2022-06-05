import {GraphClientQuery} from './graphCms';
import {gql} from 'graphql-request';

const getProducts = async query => {
  const {last = 20, orderBy = 'price_ASC', where} = query || {};
  try {
    const result = await GraphClientQuery(
      gql`
        query products(
          $last: Int
          $orderBy: ProductOrderByInput
          $where: ProductWhereInput
        ) {
          result: products(last: $last, orderBy: $orderBy, where: $where) {
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
        last,
        orderBy,
        where,
      },
    );
    return result;
  } catch (error) {
    console.log('🚀 ~ file: Api.js ~ line 31 ~ getProducts ~ error', error);
    return null;
  }
};

export {getProducts};
