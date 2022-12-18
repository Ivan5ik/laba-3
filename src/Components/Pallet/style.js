import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({

  pallet: {
    cursor: 'pointer',
    background: 'white',
    borderRadius: '5px',
    width: '307px',
    height: '200px',
    padding: '9px 10px 0px 10px',
    "& .palletColor": {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: "row",

      "& .colorBlock": {
        width: '57px',
        height: '37px',
        "&:nth-child(1)": {
          borderTopLeftRadius: '4px'
        },
        "&:nth-child(5)": {
          borderTopRightRadius: '4px'
        },
        "&:nth-child(16)": {
          borderBottomLeftRadius: '4px'
        },
        "&:nth-child(20)": {
          borderBottomRightRadius: '4px'
        },

      }
    },
    "& .palletText": {
      "& .namePallet": {
        color: '#000',
        fontSize: '15px',
        fontWeight: 600,
        height: '40px',
        lineHeight: '40px',
        float: 'left',
        width: '100 %',
        textAlign: 'left',
        textIndent: '2px',
        letterSpacing: '.55px',
      }
    }
  }

});
export default useStyles;
