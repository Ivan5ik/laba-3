import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  wrapper: {
    width: '1024px',
    margin: '0px auto',
    "& .wrapperPallet": {
      display: "flex",
      flexWrap: 'wrap',
      flexDirection: "row",
      justifyContent: 'space-between',
      rowGap: '40px'
    }
  }
})
export default useStyles
