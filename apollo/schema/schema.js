const { gql } = require('apollo-server-express');

export default  gql`

  enum COMPONENT_TYPE {
    BODY
    HEADLINE
    BUTTON
    COLUMN
    ICON
    ROW
    SUBTITLE
    SURFACE
    CARD
    APP_BAR
    INPUT
  }

  type Component {
    _id: ID
    title: String
    type: COMPONENT_TYPE
    props: String
    children: [Component]
    content: String
  }

  type Page {
    _id: ID
    title: String
    data: String
    components: [Component]
  }

  type Query {
    test: String
    page(id: ID!): Page
    pageList: [Page]
    addPage(title: String!): Page
    addComponent(title: String, type: COMPONENT_TYPE): Component
    componentList: [Component],
    updatePage(
      _id: String,
      title: String,
      data: String,
      components: [String]
    ) : Page
    updateComponent(
      _id: ID
      title: String,
      type: COMPONENT_TYPE,
      props: String,
      children: [String],
      content: String
    ) : Component
  }
`;

