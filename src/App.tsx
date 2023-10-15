import React, { useEffect, useState } from "react";
import { AppContainer } from "./AppContainer";
import { store } from "./redux";
import { Provider } from "react-redux";

function App() {
  const [intro, setIntro] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIntro(() => false), 6000);
  }, []);

  return (
    <div>
      <Provider store={store}>
        <AppContainer>
          <div className="header">
            <img src="/img/plaza/logo.png" alt="" className="logo" />
            <div className="nav">
              <div className="item">О НАС</div>
              <div className="item">НОВОСТИ</div>
              <div className="item">СЕАНСЫ</div>
              <div className="item">КОНТАКТЫ</div>
            </div>
            <div className="btns">
              <img alt="" src="/img/plaza/search.png" />
              <img alt="" src="/img/plaza/vk.png" />
            </div>
          </div>
          <div className="block-1">
            <div className="item-active">
              <img src="/img/plaza/cinema.jpg" />
            </div>
            <div className="item-not-active">
              <img src="/img/plaza/logo-bowl.png" />
            </div>
            <div className="item-not-active">
              <img src="/img/plaza/logo-kids.png" />
            </div>
          </div>
        </AppContainer>
      </Provider>
    </div>
  );
}

export default App;
