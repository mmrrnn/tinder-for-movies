import { Container } from '@mui/material';

import { MoviesStoreProvider } from 'stores/Movies';

import MoviesTinder from 'containers/MoviesTinder';

function App() {
  return (
    <Container maxWidth="md">
      <MoviesStoreProvider>
        <MoviesTinder />
      </MoviesStoreProvider>
    </Container>
  );
}

export default App;
