import React, { useState } from "react";
import useSound from 'use-sound';
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import { palletJson } from '../../utils/pallet';
import boopSfx from '../../utils/src_notify.mp3';

import useStyles from "./style";


const PalletPage = () => {
  const classes = useStyles();
  const history = useNavigate();
  const [play] = useSound(boopSfx);
  const [visible, setVisible] = useState(false)
  const [randomWord, setRandomWord] = useState({})
  const path = useLocation();
  const resultPath = path.pathname.split('/')[2]
  const palletID = palletJson.find((item) => item.id === resultPath)

  const array = ['COPIED!', "DONE", "WILL DO"]

  const handleClick = (color) => {
    navigator.clipboard.writeText(color)
    play()
    setRandomWord({ word: array[Math.floor(Math.random() * array.length)], color: `${color}` })
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 1500);
  }

  return (
    <div className={classes.palletPage}>
      {visible &&
        <div className={classes.clickWindow} style={{ background: `${randomWord.color}` }}>
          <div className="line" />
          <div className="text">{randomWord.word}</div>
          <span className="textInLine">{randomWord.color}</span>


        </div>}
      <h1 className="back" onClick={() => history('/')} >{'\u2190'} Back</h1>
      <div className="colors">
        {palletID.colors.map((item, index) => <div onClick={() => handleClick(item.color)} key={index} className={classNames("boxColor", {})} style={{ background: `${item.color}` }}><div className="textInBlock">{item.name}</div> <div className="copy">COPY</div></div>)}
      </div>
      <h1 className={classes.bottomText}>{palletID.paletteName}</h1>

    </div>
  );
};
export { PalletPage };
