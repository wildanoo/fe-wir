export default theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: 0,
    width: '500px'
  },
  modalTitle: {
    backgroundColor: '#3F51B5',
    padding: '10px',
    color: '#fff'
  },
  contentModal: {
    padding: '10px'
  }
});