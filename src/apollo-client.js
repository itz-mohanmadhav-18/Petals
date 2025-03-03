import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { toast } from 'react-toastify'; // Import toast for notifications

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, extensions }) => {
        console.error(`GraphQL error: ${message}`);
        if (extensions?.code === 'UNAUTHENTICATED') {
          toast.error('Please log in again.');
        } else {
          toast.error(`Error: ${message}`);
        }
      });
    }
    if (networkError) {
      console.error(`Network error: ${networkError.message}`);
      toast.error('Network error. Please check your connection.');
    }
  });

// Create a link to connect to your GraphQL server
const httpLink = new HttpLink({
  uri: 'http://localhost:4000', // Your GraphQL server URL (change this to your actual URL)
});

// Create a cache to store GraphQL data
const cache = new InMemoryCache();

// Create the Apollo Client
const client = new ApolloClient({
  link: errorLink.concat(httpLink), // Combine error handling with HTTP link
  cache, // Use the cache to store data
  headers: {
    authorization: localStorage.getItem('token') || '', // Include the token in the headers
  },
});

export default client;