import { ApolloClient } from "@apollo/client";
import {
  clientStateDefaults as defaults,
  defaultResolvers as resolvers,
} from "./LocalState";

export default new ApolloClient({
  uri: "http://lednas.yoyang.io:11111/graphql",
  defaults,
  resolvers,
});
