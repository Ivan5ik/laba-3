import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({

  palletPage: {
    background: 'white',
    "& .back": {
      cursor: 'pointer',
      display: 'inline-block'
    },
    "& .colors": {
      width: "100%",
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: "row",

      "& .textInBlock": {
        textTransform: 'uppercase',
        fontSize: '16px',
        color: 'white',
        fontWeight: 600,
        padding: '0px 7px 5px 0px'
      },

      "& .boxColor": {
        width: '20%',
        height: '155px',
        cursor: 'pointer',
        display: "flex",
        alignItems: 'end',
        justifyContent: "end",
        position: 'relative',
        "&:hover .copy": {
          display: 'block'
        },
      },
      "& .copy": {
        position: 'absolute',
        display: 'none',
        color: 'white',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: '2px solid #e3d8d8',
        padding: '10px 20px',
        borderRadius: '5px'
      }

    }
  },
  clickWindow: {
    position: 'fixed',
    zIndex: '100',
    width: '100%',
    height: '100%',
    background: 'green',
    transition: 'opacity .4s',
    "& .text": {
      position: 'absolute',
      fontSize: '120px',
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#ecf0f1",
      textShadow: "2px 2px #2c3e50",
    },
    "& .line": {
      height: "160px",
      lineHeight: '110px',
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "white",
      opacity: '0.3',
      padding: "30px 0",
      position: "relative",
      userSelect: "none",
      zIndex: '1',
    },
    "& .textInLine": {
      top: "70%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textShadow: '1px 1px #444',
      height: '60px',
      position: "absolute",
      color: "#ecf0f1",
      display: "block",
      fontSize: "32px"
    }
  },
  bottomText: {
    textAlign: 'end',
    paddingRight: '5px',
  }

});
export default useStyles;
