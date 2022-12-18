import React from "react";
import useSound from 'use-sound';

import boopSfx from '../../utils/src_notify.mp3';

import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  const [play] = useSound(boopSfx);
  return (
    <div className={classes.rootHeader}>
      <h1 className="headText" onClick={play}>
        FLAT UI COLORS 2
      </h1>
    </div>
  )
}

export { Header };
