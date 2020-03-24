import React, { Component, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import Beranda from "./Beranda";
import ALBeranda from "./ALBeranda";
import { Redirect } from "react-router-dom";
import { REGISA } from "../_actions/RegisterA";
import { connect } from "react-redux";
import "./Register.css";

class Register extends Component {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShoww = () => setShow(true);
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      nama: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: "",
      status: "false"
    };
  }

  // componentDidMount() {
  //   this.props.REGISA();
  // }
  // componentDidMount() {
  //   this.props.spesA();
  // }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
    console.log(this.show);
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const data = {
      nama: this.state.nama,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address,
      status: this.state.status
    };
    this.props.REGISA(data);
    console.log(data);
  };
  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { dataRegis, isLoading, dataErr, error } = this.props.REGISR;
    console.log(dataRegis);
    // const token = localStorage.getItem("token");
    return (
      <>
        <Button
          className="register"
          variant="outline-danger"
          onClick={this.handleShow}
        >
          Register
        </Button>

        <div>
          {dataRegis.data ? <Redirect to="./ALBeranda" /> : null}
          <Modal show={this.state.show} onHide={this.handleClose}>
            <div>
              <Modal.Title className="formlogin">Resgistrasi</Modal.Title>
              <p className="ModalX" onClick={this.handleShow}>
                &#10060;
              </p>
            </div>
            <div>
              <Form onSubmit={this.handleOnSubmit} className="form-modal">
                <Form.Group controlId="formBasicBreeder">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nama Lengkap"
                    name="nama"
                    onChange={this.handleChangeInput}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChangeInput}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChangeInput}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChangeInput}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Control
                    as="select"
                    // type="text"
                    name="gender"
                    onChange={this.handleChangeInput}
                    placeholder="Jenis Kelamin"
                  >
                    <option selected disabled>
                      Choose
                    </option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Telepon</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    onChange={this.handleChangeInput}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="address"
                    onChange={this.handleChangeInput}
                    rows="3"
                  />
                </Form.Group>
                <button type="submit" className="footersregis">
                  Register
                </button>
              </Form>
            </div>
            <div className="Footer-btn">
              {/* <Button className="Footer" onClick={handleClose}>
                    Login
                    </Button> */}
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProp = state => {
  // console.log("j", state);
  return {
    REGISR: state.REGISR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    REGISA: data => dispatch(REGISA(data))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(Register);
