import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { toast } from 'react-toastify';

// Function to handle logout
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  // Redirect to login page
  window.location.href = '/login';
};

// Auth middleware - adds token to requests
const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');
  
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? token : '', // Just the token without "Bearer" prefix
    }
  }));

  return forward(operation);
});

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      console.error(`GraphQL error: ${err.message}`);
      
      // Handle authentication errors
      if (err.extensions?.code === 'UNAUTHENTICATED') {
        toast.error('Your session has expired. Please log in again.');
        logout();
      } else {
        // Display other GraphQL errors
        toast.error(`Error: ${err.message}`);
      }
    }
  }
  
  if (networkError) {
    console.error(`Network error: ${networkError.message}`);
    toast.error('Network error. Please check your connection.');
  }
});

// HTTP link to your GraphQL server
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql', // Your GraphQL server URL
});

// Combine all links
const link = errorLink.concat(authMiddleware.concat(httpLink));

// Create Apollo Client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only', // Don't use cache for queries by default
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export default client;