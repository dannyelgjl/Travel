import React from 'react';
import {FlatList} from 'react-native';
import {Header, Card} from '../../components';

import {Container} from './styles';

const TravelDetail: React.FC = () => {
  const data = [
    {
      id: 1,
      hour: '20h30',
      city: 'São Paulo',
      time: '6h',
      convencional: 'Convencional',
      value: ' 2.989',
    },
    {
      id: 2,
      hour: '20h30',
      city: 'São Paulo',
      time: '6h',
      convencional: 'Convencional',
      value: '2.989',
    },
    {
      id: 3,
      hour: '20h30',
      city: 'São Paulo',
      time: '6h',
      convencional: 'Convencional',
      value: '2.989',
    },
    {
      id: 4,
      hour: '20h30',
      city: 'São Paulo',
      time: '6h',
      convencional: 'Convencional',
      value: '2.989',
    },
    {
      id: 5,
      hour: '20h30',
      city: 'São Paulo',
      time: '6h',
      convencional: 'Convencional',
      value: '2.989',
    },
  ];

  return (
    <>
      <Header goback />
      <Container>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Card item={item} />}
        />
      </Container>
    </>
  );
};

export default TravelDetail;
