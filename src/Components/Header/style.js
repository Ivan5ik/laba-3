import { createUseStyles } from "react-jss"
const useStyles = createUseStyles({
  rootHeader: {
    height: '105px',
    display: 'flex',
    alignItems: 'center',
    "& .headText": {
      color: 'white',
      fontSize: '24px',
      letterSpacing: '2.5px',
      fontWeight: 600,
      textShadow: '0 1px, 1px 0, 1px 1px',
      cursor: 'pointer'
    }
  }
})
export default useStyles
