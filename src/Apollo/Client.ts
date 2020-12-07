import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: "http://lednas.yoyang.io:11111/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return Boolean(localStorage.getItem("token"));
            },
          },
        },
      },
    },
  }),
});
