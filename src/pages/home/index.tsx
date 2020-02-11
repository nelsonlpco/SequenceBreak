import React from 'react';
import {Container} from 'components/container';

import Clock from './components/clock';
import ActionList from './components/action-list';
import {theme} from 'style/theme';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Container flex={2} alignItems="center" justifyContent="center">
        <Clock />
      </Container>
      <ActionList />
    </Container>
  );
};

export default HomePage;
