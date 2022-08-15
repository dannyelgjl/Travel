import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Header, Card, Title} from '../../components';
import api from '../../services/api';
import tokenTest from '../../services/token';

import {Container, TitleContainer} from './styles';

const TravelDetail = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    api
      .get('localidades', {
        headers: {
          Authorization: `Bearer ${tokenTest}`,
        },
      })
      .then(response => {
        setPlaces(response.data.data);
        console.log('LOCALIDADES:', response.data.data);
      });
  }, []);
  return (
    <>
      <Header goback />

      <Container>
        <TitleContainer>
          <Title title="Encontre seu destino!" />
        </TitleContainer>

        <FlatList
          data={places}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          keyExtractor={item => item.localidadeId}
          renderItem={({item}) => <Card item={item} />}
        />
      </Container>
    </>
  );
};

export default TravelDetail;
