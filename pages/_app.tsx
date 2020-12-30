import { ApolloProvider } from '@apollo/client'
import '../styles/globals.css'
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://with-graphql-hasura.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers:{
//     "x-hasura-admin-secret": "myadminsecretkey",
  },
});

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}

export default MyApp
