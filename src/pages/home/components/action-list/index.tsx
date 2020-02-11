import React from 'react';
import {ActionContainer} from './style';
import {Button} from 'components/buttons';
import {AbsoluteContainer} from 'components/container';
import {theme} from 'style/theme';

const ActionList: React.FC = () => {
  return (
    <ActionContainer>
      <AbsoluteContainer
        top={'-23px'}
        alignSelf="center"
        layer={theme.layers.l7}>
        <Button
          onPress={() => false}
          bgColor={theme.colors.stop}
          size={46}></Button>
      </AbsoluteContainer>
    </ActionContainer>
  );
};

export default ActionList;
