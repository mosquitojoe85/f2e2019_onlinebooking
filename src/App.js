import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import photo4 from './assets/photo4.png';
import photo5 from './assets/photo5.png';
import photo6 from './assets/photo6.png';
import Icon from '@mdi/react'
import { mdiCheckboxBlankCircle, mdiCheckboxBlankCircleOutline } from '@mdi/js';

const btns = [0, 1, 2, 3];

function App() {
  const [bgIndex, setBgIndex] = useState(0);
  const renderBtns = () => {
    return btns.map(el => (
      <div key={`bgBtn${el}`} className="btn" onClick={() => setBgIndex(el)}>
        {el === bgIndex
          ? <Icon path={mdiCheckboxBlankCircle} size="12px" color="#ffffff" />
          : <Icon path={mdiCheckboxBlankCircleOutline} size="12px" color="#ffffff" />
        }
      </div>
    ));
  }

  return (
    <div className={`appWrapper bg${bgIndex}`}>
      <div className="app">
        <div className="leftCol">
          <div className="logoBlock"><img src={logo} alt="logo" /></div>
          <div className="houseDetailBlock">
            <h1>好室旅店。HOUSE HOTEL</h1>
            <p>花蓮縣花蓮市國聯一路1號</p>
            <p>03-8321155</p>
            <p>HOUSE@HOTEL.COM</p>
          </div>
          <div className="bgIndexBtnBlock">
            {renderBtns()}
          </div>
        </div>
        <div className="rightCol">
          <div className="roomGrid">
            <img src={photo1} alt="room1" />
            <div className="roomGrid_hover">Single Room</div>
          </div>
          <div className="roomGrid">
            <img src={photo2} alt="room2" />
            <div className="roomGrid_hover">Double Room</div>
          </div>
          <div className="roomGrid">
            <img src={photo3} alt="room3" />
            <div className="roomGrid_hover">Twin Room</div>
          </div>
          <div className="roomGrid">
            <img src={photo4} alt="room4" />
            <div className="roomGrid_hover">Deluxe Single Room</div>
          </div>
          <div className="roomGrid">
            <img src={photo5} alt="room5" />
            <div className="roomGrid_hover">Deluxe Double Room</div>
          </div>
          <div className="roomGrid">
            <img src={photo6} alt="room6" />
            <div className="roomGrid_hover">Deluxe Twin Room</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
