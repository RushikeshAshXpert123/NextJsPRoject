// graphql/schema.js
import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Location {
    id: ID!
    name: String!
    image: String!
    count: String!

  }

  type Hostel {
    id: ID!
    name: String!
    locationname: String!
    image: String!
    locationId: ID!
  }

  type LocationHostelCount {
    location: Location!
    count: Int!
  }

  type Query {
    locations: [Location!]!
    hostels(locationId: ID!): [Hostel!]!
    hostelCounts: [LocationHostelCount!]!
  }
`;
