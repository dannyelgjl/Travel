import React from 'react';
import {Header, Title, Button, Input} from '../../components';
import {Container, FormContent} from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Title />

        <FormContent>
          <Input label="De:" />
          <Input label="Para:" />
          <Input label="Partida:" />
        </FormContent>

        <Button title="Compre já" />
      </Container>
    </>
  );
};

export default Home;
