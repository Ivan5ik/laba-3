import { createUseStyles } from "react-jss"
const useStyles = createUseStyles({
  root: {
    height: '285px',
    marginTop: '80px',
    background: "rgba(0, 0, 0, 0.2)",
    display: 'flex',
    borderRadius: '7px',
    "& .textBlock": {
      marginTop: '10px',
      width: '240px',
      display: 'flex',
      flexDirection: 'column',
      "& .header": {
        color: 'white',
        fontSize: '21px',
        fontWeight: 700,
        marginBottom: '10px'
      },
      "& .textInHeader": {
        color: 'white',
        fontSize: '17px',
        fontWeight: 600,
        marginBottom: '10px'
      },

    },
    "& .leftMG": {
      marginLeft: '10px'
    },
    "& .expansion": {
      width: '400px'
    }

  }

})
export default useStyles
