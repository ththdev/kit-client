import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: "https://node-server-fwqtf.run.goorm.io/graphql"
})

export default client