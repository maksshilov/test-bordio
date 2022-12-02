import React from "react";
import { AppContainer } from "./AppContainer";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { Tools } from "./components/Tools";

function App() {
  return (
    <div>
      <AppContainer>
        <SideBar />
        <Tools />
        <Content />
      </AppContainer>
    </div>
  );
}

export default App;
