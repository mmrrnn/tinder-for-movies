import { Container } from '@mui/material';

import { MovieStoreProvider } from 'stores/Movies';

function App() {
  return (
    <Container maxWidth="md">
      <MovieStoreProvider>
        App
      </MovieStoreProvider>
    </Container>
  );
}

export default App;
