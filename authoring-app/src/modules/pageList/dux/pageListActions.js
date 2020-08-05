import { GET_ALL } from './pageListActionTypes';
import { gql } from '@apollo/client';
import { client } from './../../app/App';

const GetPages = gql`
  query GetPages {
    pageList {
      _id,
      title
    }
  }
`;

export const getAllPages = payload => async dispatch => {
  console.log('Get pages...');
  client.query({ query: GetPages})
  .then(result => {
    console.log('Result:', result);
    dispatch({
      type: GET_ALL,
      payload: result.data.pageList
    });
  })
}
