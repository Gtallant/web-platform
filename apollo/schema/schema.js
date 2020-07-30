const { gql } = require('apollo-server-express');

export default  gql`
  type Component {
    id: ID
    title: String
    type: String
    data: String
  }

  type Page {
    id: ID
    title: String
    data: String
    components: [Component]
  }

  type Query {
    test: String
    page(id: ID!): Page
    pageList: [Page]
    addPage(title: String!): Page
  }
`;

