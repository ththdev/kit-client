import React from 'react'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import stores from '../store'
import client from '../graphql/client'
import { ApolloProvider } from '@apollo/react-hooks'

const Root: React.SFC<{}> = () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Provider {...stores}>
                <App />
            </Provider>
        </BrowserRouter>
    </ApolloProvider>
)

export default Root