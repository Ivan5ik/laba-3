import React from "react";

import { useNavigate } from "react-router-dom";

import useStyles from "./style";

const Pallet = ({ namePallet, color, id }) => {
  const classes = useStyles();

  const history = useNavigate();

  return (
    <div className={classes.pallet} onClick={() => history(`/palette/${id}`)} >
      <div className="palletColor">
        {color.map((item, index) => <div key={index} className="colorBlock" style={{ background: `${item.color}` }} />)}
      </div>

      <div className="palletText">
        <h1 className="namePallet">{namePallet}</h1>
      </div>
    </div>
  );
};
export { Pallet };
