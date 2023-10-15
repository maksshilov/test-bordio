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
              <img src="/img/plaza/cinema2.png" alt="" />
            </div>
            <div className="item-not-active">
              <img src="/img/plaza/logo-bowl.png" />
            </div>
            <div className="item-not-active">
              <img src="/img/plaza/logo-kids.png" />
            </div>
          </div>
          <div className="block-2">
            <div className="item">
              НОВЫЕ
              <br />
              КРЕСЛА
            </div>
            <div className="item">
              НОВЫЙ
              <br />
              ЗВУК
            </div>
            <div className="item">
              НОВЫЙ
              <br />
              СВЕТ
            </div>
            <div className="item">
              НОВЫЙ
              <br />
              ЭКРАН
            </div>
          </div>
          <div className="block-3">
            <div className="tab">КИНО</div>
            <div className="tab-contain">
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
              </div>
              <div className="posters">
                <div className="blur"></div>
                <img src="/img/plaza/poster-0.png" />
                <img src="/img/plaza/poster-1.png" />
                <img src="/img/plaza/poster-2.png" />
                <img src="/img/plaza/poster-3.png" />
              </div>
            </div>
          </div>
          <div className="footer">
            <img src="/img/plaza/logo-white.png" alt="" className="logo" />
            <div className="nav">
              <div className="item">О НАС</div>
              <div className="item">НОВОСТИ</div>
              <div className="item">СЕАНСЫ</div>
              <div className="item">КОНТАКТЫ</div>
            </div>
            <div className="tel">8 800 000 00 00</div>
          </div>
          <div className="footer-2">
            <div className="item">©плаза 2023</div>
            <div className="item">Политика конфиденциальности</div>
          </div>
        </AppContainer>
      </Provider>
    </div>
  );
}

export default App;
