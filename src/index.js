import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './index.css';
import App from './App';


const client = new ApolloClient({
    uri: 'http://localhost:5000',
  });
  client.query({
      query: gql`
      {
          hello,
      }
      `
  })
  .then(result => console.log(result));
ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

