import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients';
import Projects from './components/Projects';
import AddClientModal from './components/AddClientModal';


const cashe = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
});

const client = new ApolloClient ({
  uri: 'http://192.168.1.214:5000/graphql',
  cache: cashe,
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
          <div className='container'>
            <AddClientModal />
            <Projects />
            <Clients />
          </div>
        </ApolloProvider>
    </>
  );
}

export default App;