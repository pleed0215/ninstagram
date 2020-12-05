import ApolloClient from "apollo-boost";

import {
  clientStateDefaults as defaults,
  defaultResolvers as resolvers,
} from "./LocalState";

export default new ApolloClient({
  uri: "http://lednas.yoyang.io:11111/graphql",
  clientState: {
    defaults,
    resolvers,
  },
});
