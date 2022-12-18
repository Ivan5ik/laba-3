import React from "react";

import useStyles from "./style";

const Footer = () => {


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="textBlock leftMG">
        <h1 className="header">SHARE</h1>
        <p1 className="textInHeader">Send via e-mail</p1>
        <p1 className="textInHeader">Share on Twitter</p1>
      </div>
      <div className="textBlock">
        <h1 className="header">MORE</h1>
        <p1 className="textInHeader">Contact Me</p1>
      </div>
      <div className="textBlock expansion">
        <h1 className="header">ABOUT</h1>
        <p1 className="textInHeader">Flat UI Colors 2 brought to you by Ahmet Sulek.</p1>
      </div>
    </div>
  )
}

export { Footer }
