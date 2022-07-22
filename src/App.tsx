import { Sidemenu } from 'components/Sidemenu';
import { Home } from 'pages/Home';
import { Container } from 'styles/App';
import { GlobalStyle } from 'styles/GlobalStyle';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Home />
      <Sidemenu />
    </Container>
  );
}

export default App;
