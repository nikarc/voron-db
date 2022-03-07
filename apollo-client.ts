import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.GITGHUB_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_ACCESS_TOKEN;

  return {
    headers: {
      ...headers,
      accept: "",
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
