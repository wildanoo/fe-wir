export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      maxWidth: theme.spacing(100)
    },
  },
});