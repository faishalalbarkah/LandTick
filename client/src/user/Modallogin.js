import React, { Component, useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Modallogin.css";
import ALBeranda from "./ALBeranda";
import IndexAdmin from "../admin/IndexAdmin";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LOGINA } from "../_actions/LoginA";

class Modallogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tampil: false,
      // data: [],
      username: "",
      password: "",
      usernameErr: "",
      passwordErr: ""
    };
  }
  handleClick = () => {
    this.setState({
      tampil: !this.state.tampil
    });
    // console.log(this.tampil);
  };

  // handleOnSubmit = e => {
  //   e.preventDefault();
  //   const data = {
  //     username: e.target.value,
  //     password: e.target.password
  //   };
  // };
  usernameOnChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  passwordOnChange = e => {
    this.setState(
      {
        password: e.target.value
      },
      () => this.validatePassword(this.state.password)
    );
  };

  validatePassword = pass => {
    if (pass.length >= 4) {
      this.setState({
        passwordErr: ""
      });
    } else if (pass.length === 0) {
      this.setState({
        passwordErr: "Harap masukan password anda"
      });
    } else {
      this.setState({
        passwordErr: "masukan dengan minimal 4 karakter"
      });
    }
  };

  validateUsername = user => {
    if (user) {
      this.setState({
        usernameErr: ""
      });
    } else {
      this.setState({
        usernameErr: "mohon masuukan username anda"
      });
    }
  };

  handleLogin = e => {
    e.preventDefault();
    let dataLogin = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value
    };
    this.props.LOGINA(dataLogin);
  };

  // handleChangeInput = e => {
  //   // console.log(e.target.name + " : " + e.target.value);
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  //apabila ada param props di taro kurung setelah functional
  // const [show, setShow] = useState(false);
  // useState({
  //   //use State pengganti Constructor
  //   email: "",
  //   password: ""
  // });
  // const handleClose = () => ({

  // });
  // const handleShow = () => setShow(true);
  render() {
    const { data, dataErr, error, isLogin } = this.props.LOGINR;
    console.log(data);
    if (isLogin === true && data.role === "false") {
      // window.localStorage.setItem("token", data.token) ? (
      //   <Redirect to="./ALBeranda" />
      // ) : null;
      window.localStorage.setItem("token", data.token);
      window.location.href = "http://localhost:3000/ALBeranda";
    } else if (isLogin === true && data.role === "true") {
      window.localStorage.setItem("token", data.token);
      window.location.href = "http://localhost:3000/IndexAdmin";
    }

    const token = localStorage.getItem("token");
    // if (token) {
    //   return <Redirect to="/ALBeranda" />;
    // }
    return (
      <>
        <Button
          className="btn-modal"
          variant="outline-danger"
          onClick={this.handleClick}
        >
          Login
        </Button>

        <div>
          {/* {data.token != null ? <Redirect to="./ALBeranda" /> : null} */}
          <Modal show={this.state.tampil} onHide={this.handleClick}>
            <div>
              <Modal.Title className="formlogin">Login</Modal.Title>
              <p className="ModalX" onClick={this.handleClick}>
                &#10060;
              </p>
            </div>
            <div show={this.state.Modallogin}>
              <Form className="form-modal" onSubmit={this.handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="Username"
                    name="username"
                    onChange={this.usernameOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.passwordOnChange}
                  />
                </Form.Group>
                <button type="submit" className="footerss">
                  Login
                </button>
              </Form>
            </div>
            <nav>
              <div className="Footer-btn">
                {/* <button className="footers">Login</button> */}
              </div>
            </nav>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProp = state => {
  // console.log("j", state);
  return {
    LOGINR: state.LOGINR
  };
};

const mapDispatchToProps = dispatch => {
  console.log("cek4");
  return {
    LOGINA: data => dispatch(LOGINA(data))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(Modallogin);
