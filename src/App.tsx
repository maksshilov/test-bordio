import React from "react";
import { AppContainer } from "./AppContainer";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { Tools } from "./components/Tools";
import { store } from "./redux";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppContainer>
          <SideBar />
          <Tools />
          <Content />
        </AppContainer>
      </Provider>
    </div>
  );
}

export default App;
