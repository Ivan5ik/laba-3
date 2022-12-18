import React from "react";

import { Pallet } from "../../Components/Pallet";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { palletJson } from '../../utils/pallet';

import useStyles from "./style";

const HomePage = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundImage: "url(./assets/img/bg.png)" }}>
      <div className={classes.wrapper}>
        <Header />
        <div className="wrapperPallet">
          {palletJson.map((item, index) => <Pallet key={index} namePallet={item.paletteName}
            color={item.colors} id={item.id} />)}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export { HomePage };
