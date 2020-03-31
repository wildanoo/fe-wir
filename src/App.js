import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { userAction, getData } from './redux/actions/users'

import Home from './pages/home/home';
import Modal from './pages/modal/modal';

class App extends Component {

  state = {
    data: [],
    modal: {
      isOpen: false,
      data: {
        name: "",
        phone: "",
        address: ""
      }
    }
  }

  async componentDidMount() {
    this.fetchUserData();
  }

  async fetchUserData() {
    const { getDataUser } = this.props;
    await getDataUser();
    const { dataUsers } = this.props;
    this.setState({
      data: dataUsers
    })
  }

  handleClose = () => {
    this.setState({
      modal: {
        isOpen: false,
        data: {
          name: "",
          phone: "",
          address: ""
        }
      }
    })
  }

  handleOpen = id => () => {
    const { data } = this.state;
    const selected = data.filter(user => user.id === id);
    const address = `${selected[0].address.street}, ${selected[0].address.city}`;
    this.setState({
      modal: {
        isOpen: true,
        data: {
          name: selected[0].name,
          phone: selected[0].phone,
          address
        }
      }
    })
  }

  render() {
    const { data, modal } = this.state;
    const tableHead = ['Nama', 'No Telp', 'Action'];
    return (
      <>
        <Home
          tableHead={tableHead}
          tableBody={data}
          handleOpen={this.handleOpen}
        />
        <Modal
          open={modal.isOpen}
          handleClose={this.handleClose}
          data={modal.data}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { dataUsers } = state.userList;
  return {
    ...state,
    dataUsers
  }
};

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(userAction()),
  getDataUser: () => dispatch(getData())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
