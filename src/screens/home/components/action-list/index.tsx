import React from "react";
import { ActionListContainer, ListContainer } from "./style";
import StopButton from "./stop-button";
import AddButton from "./add-button";

const ActionList: React.FC = () => {
  return (
    <ActionListContainer>
      <StopButton />
      <AddButton />
      <ListContainer></ListContainer>
    </ActionListContainer>
  );
};

export default ActionList;
