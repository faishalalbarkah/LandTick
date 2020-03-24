import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import IndexAdmin from "./IndexAdmin";
import "./EditStatus.css";
import { connect } from "react-redux";
import { Dashup } from "../_actions/DashA";
import { DashById } from "../_actions/DashA";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      status: "Approved",
      error: false,
      infoModal: false
    };
  }

  handleChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log(this.props.data.id);

    if (this.state.status !== "") {
      const id = this.props.id;
      const data = { status: this.state.status };
      const token = localStorage.getItem("token");
      axios({
        method: "PATCH",
        data: {
          status: this.state.status
        },
        url: "http://localhost:4300/api/v2/order/" + this.props.data.id,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          window.location.href = "http://localhost:3000/IndexAdmin";
        })
        .catch(err => {
          console.log(err.message);
        });
    } else {
      this.setState({
        error: true
      });
    }
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  getEdit = e => {
    // let data = {
    //   status: this.state.status
    // };
    // this.props.Dashup(this.props.id, data);
    // this.handleShow();
    this.props.Dashup(this.props.id);
    this.handleShow();
  };

  render() {
    const data = this.props.data;
    // console.log("data admin =>", this.props.data);

    return (
      <>
        {/* <Button variant="primary" >
        Custom Width Modal
      </Button> */}
        <img
          id="pensil"
          onClick={this.getEdit}
          src={require("./Img/pensil.PNG")}
        />
        <div>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <div className="pembungkuseditstatus">
              <div className="editstatusheader">
                <img src={require("./Img/landtickbackground.PNG")} />
              </div>
              <div className="silangeditstatus">
                <p onClick={this.handleClose}>&#10060;</p>
              </div>
              <div className="bodyeditstatus">
                <Form className="form-modal" onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicBreeder">
                    <Form.Label>
                      <h5>Jumlah Tiket</h5>
                    </Form.Label>
                    <Form.Control disabled type="text" value={1} />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <h5>Name</h5>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      value={data.user.nama}
                      // placeholder={datadashup.user.nama}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      <h5>Tujuan</h5>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      value={data.tiket.destination_station}
                      // placeholder={datadashup.tiket.start_station}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>
                      <h5>Bukti Trf</h5>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      value={data.attachment}
                      // placeholder={datadashup.attachment}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    <select
                      className="form-control input"
                      name="status"
                      // id="gender"
                      as="Select"
                      onChange={this.handleChange}
                    >
                      <option value="Approved">Approved</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancel">Cancel</option>
                    </select>
                    <Form.Text className="text-danger"></Form.Text>
                  </Form.Group>
                  <button type="submit" className="btn-edutstatus">
                    Save
                  </button>
                </Form>
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProp = state => {
  return {
    DashR: state.DashR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Dashup: (id, data) => dispatch(Dashup(id, data)),
    DashById: datadash => dispatch(DashById(datadash))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(EditStatus);
