import React, { useEffect, useState } from "react";
import { AppContainer } from "./AppContainer";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { Tools } from "./components/Tools";
import { store } from "./redux";
import { Provider } from "react-redux";
import Lottie from "lottie-react";

function App() {
  const [intro, setIntro] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIntro(() => false), 6000);
  }, []);

  return (
    <div>
      <Provider store={store}>
        <AppContainer>
          {intro ? (
            <div className="lottie">
              <Lottie animationData={require("./lottie/bordio-intro.json")} autoPlay style={{ width: "50vw" }} />
            </div>
          ) : (
            <>
              <SideBar />
              <Tools />
              <Content />
            </>
          )}
        </AppContainer>
      </Provider>
    </div>
  );
}

export default App;
