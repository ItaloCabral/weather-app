import { useState } from 'react';

import { GlobalStyle } from 'styles/GlobalStyle';
import { Container, MenuToggle } from 'styles/App';

import { Home } from 'pages/Home';
import { Sidemenu } from 'components/Sidemenu';
import { FiMenu } from 'react-icons/fi';

function App() {

  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  
  return (
    <Container>
      <GlobalStyle />
      <Home />
      <MenuToggle onClick={() => toggleMenu()} isMenuOpen={show} >
        <FiMenu size={48} />
      </MenuToggle>
      <Sidemenu show={show} />
    </Container>
  );
}

export default App;
