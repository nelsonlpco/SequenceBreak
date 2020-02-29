import React from "react";
import { Text } from "react-native";

import { ConfigureSequenceContainer, ConfigureContainer } from "./style";
import { MenuContainer } from "./components/button-container";
import Button from "components/button";
import { useTheme } from "../../hooks/useTheme";
import NumberSelect from "components/number-select";

const ConfigureSequence: React.FC = () => {
  const theme = useTheme();

  return (
    <ConfigureSequenceContainer>
      <Text>Title</Text>
      <ConfigureContainer>
        <NumberSelect />
      </ConfigureContainer>
      <MenuContainer>
        <Button bgColor={theme.colors.stop} title={"Cancelar"} />
        <Button bgColor={theme.colors.start} title={"Criar"} />
      </MenuContainer>
    </ConfigureSequenceContainer>
  );
};

export default ConfigureSequence;
