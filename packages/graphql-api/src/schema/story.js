import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    stories(cursor: String, limit: Int): StoryConnection!
    story(id: ID!): Story!
  }

  extend type Mutation {
    createStory(title: String!, body: String!): Story!
    updateStory(id: ID!, title: String, body: String): Story!
    likeStory(id: ID!): Story!
    dislikeStory(id: ID!): Story!
    viewStory(id: ID!): Story!
    deleteStory(id: ID!): Boolean!
  }

  type StoryConnection {
    edges: [Story!]!
    pageInfo: StoriesPageInfo!
  }

  type StoriesPageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

  type Story {
    id: ID!
    title: String!
    body: String!
    user: User!
    createdAt: String!
    likedBy: [User!]
    dislikedBy: [User!]
    viewedBy: [User!]
    comments: [Comment!]
  }
`