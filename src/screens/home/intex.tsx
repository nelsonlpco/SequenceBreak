import React from "react";

import Clock from "./components/clock";
import { HomeContainer } from "./style";
import ActionList from "./components/action-list";

const HomeScreen: React.FC = () => {
  return (
    <HomeContainer>
      <HomeContainer>
        <Clock />
      </HomeContainer>
      <ActionList />
    </HomeContainer>
  );
};

export default HomeScreen;
