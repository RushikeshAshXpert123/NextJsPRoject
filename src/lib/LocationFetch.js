import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

function getGraphqlUri() {
  if (typeof window !== "undefined") {
    // Running in the browser
    return `http://${window.location.hostname}:3000/api/graphql`;
  } else {
    // Running on the server
    return `http://localhost:3000/api/graphql`; // Adjust this URI as needed
  }
}

export async function fetchLocations() {
  const client = new ApolloClient({
    uri: getGraphqlUri(),
    cache: new InMemoryCache(),
  });

  const GET_LOCATIONS = gql`
    query GetLocations {
      locations {
        id
        name
        image
      }
    }
  `;

  const { data } = await client.query({ query: GET_LOCATIONS });
  return data.locations;
}

export async function fetchHostels(locationId) {
  const client = new ApolloClient({
    uri: getGraphqlUri(),
    cache: new InMemoryCache(),
  });

  const GET_HOSTELS = gql`
    query GetHostels($locationId: ID!) {
      hostels(locationId: $locationId) {
        id
        name
        locationname
        image
      }
    }
  `;

  const { data } = await client.query({
    query: GET_HOSTELS,
    variables: { locationId },
  });
  return data.hostels;
}

export async function fetchHostelCounts() {
  const client = new ApolloClient({
    uri: getGraphqlUri(),
    cache: new InMemoryCache(),
  });

  const GET_HOSTEL_COUNTS = gql`
    query GetLocations {
      locations {
        id
        name
        count
      }
    }
  `;

  const { data } = await client.query({ query: GET_HOSTEL_COUNTS });
  return data.locations;
}
