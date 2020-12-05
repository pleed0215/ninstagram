# Ninstagram

## React + React Native + Typescript + GraphQL + TailwindCSS

react typescript 설치를 위해 블로그를 뒤져보면서 삽질도 많이했지만.. 대부분 CRA에 typescript 옵션만 줘도 해결이 된다.

### Setting up

## npm install

install 할 패키지들...

```
    graphql
    apollo-boost
    react-apollo-hooks
    react-helmet
    react-dom-router
```

## 1. Frontend setup

### ApolloClient

- 1. ApolloHooksProvider & ApolloClient
     react-apollo-hooks package에서 import

Apollo/Client.ts

```ts
export default new ApolloClient({
  uri: "http://lednas.yoyang.io:11111/graphql",
});
```

apollo client를 위한 설정을 해준다.
그 다음
App.tsx에서 ApolloProvider를 App에 넣어주자.

```ts
const App: React.FunctionComponent = () => (
  <>
    <ApolloProvider client={Client}>
      <GlobalRouter />
    </ApolloProvider>
  </>
);
```

- 2. LocalState
     Apollo/LocalState.ts
     client에 없는 state?
     여기에서는 authentication 되었는지 안되었는지만 저장한다.

### Warning> react-apollo-hooks는 deprecated되었다.

    - Apollo/LocalState.ts

    ```ts
    export const clientStateDefaults = {

        isLoggedIn: Boolean(localStorage.getItem("token")),
        };

        export const defaultResolvers = {
        Mutation: {
        logUserIn: (_, { token }, { cache }) => {
            localStorage.setItem("token", token);
            cache.writeData({
            data: {
            isLoggedIn: true,
            },
        });
        return null;
        },
        logUserOut: (_, \_\_, { cache }) => {
            localStorage.removeItem("token");
            window.location.reload();
            return null;
            },
        },
    };

    ```

    일종의 query, mutation인데 이것은 local에서만 해당하는 것이라... 이 쿼리들을 사용할 때에는. @client를 붙여줘야 한다.

    ```ts
    const QUERY = gql`
        {
            isLoggedIn @client
        }
    `;
    ```

    - useQuery
    graphql query hook. {loading, error, data}를 리턴해준다.

    ```ts
        const {
            loading,
            error,
            data: { isLoggedIn },
        } = useQuery(QUERY);
    ```
