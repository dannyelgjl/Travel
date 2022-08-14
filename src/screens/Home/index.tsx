import React from 'react';
import {Header, Title} from '../../components';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title />
      </Container>
    </>
  );
};

export default Home;
