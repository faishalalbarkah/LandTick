import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";
import "./AddTiket.css";
import "../user/ALBeranda.css";
import "../user/Register.css";
import IndexAdmin from "./IndexAdmin";
import { Redirect } from "react-router-dom";
import { ADDTIKETA } from "../_actions/AddTiketA";
import { connect } from "react-redux";
import HeaderAdmin from "./HeaderAdmin";

class AddTiket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      nama_train: "",
      type_train_id: "",
      date_start: "",
      start_station: "",
      start_time: "",
      destination_station: "",
      arrival_time: "",
      price: "",
      qty: ""
    };
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const data = {
      nama_train: this.state.nama_train,
      type_train_id: {
        id: Number(this.state.type_train_id)
      },
      date_start: this.state.date_start,
      start_station: this.state.start_station,
      start_time: this.state.start_time,
      destination_station: this.state.destination_station,
      arrival_time: this.state.arrival_time,
      price: this.state.price,
      qty: this.state.qty
    };
    console.log(data);
    this.props.ADDTIKETA(data);
    this.setState({
      redirect: true
    });
    // .then(() => {
    //   console.log("afterpost");
    // })
    // .catch(() => {
    //   console.log("error");
    // });
  };

  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { isAdd } = this.props.ADDTIKETR;
    // console.log(datatiket);
    return (
      <div>
        {/* <div className="AddtiketHeader">
          <img className="landticc" src={require("./Img/landtick.PNG")} />
          <img className="profileorang" src={require("./Img/orang.PNG")} />
          <p>Admin</p>
        </div> */}
        <HeaderAdmin />
        <div className="AddTiketBody">
          <p>Tambah Tiket</p>
        </div>
        <Container>
          {/* {datatiket.data ? <Redirect to="./IndexAdmin" /> : null} */}
          <div className="formAddTiket">
            <Form onSubmit={this.handleOnSubmit}>
              <Form.Group controlId="formBasicGender">
                <Form.Label>Nama Kereta</Form.Label>
                <Form.Control
                  name="nama_train"
                  type="text"
                  placeholder="Nama Kereta"
                  onChange={this.handleChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="formGridState">
                <Form.Label>Jenis Kereta</Form.Label>
                <Form.Control
                  name="type_train_id"
                  as="select"
                  placeholder="Jenis Kereta"
                  onChange={this.handleChangeInput}
                >
                  <option value="" selected disabled>
                    Choose
                  </option>
                  <option value="1">Ekonomi</option>
                  <option value="2">Eksekutif</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Tanggal Keberangkatan</Form.Label>
                <Form.Control
                  name="date_start"
                  type="date"
                  placeholder="Tanggal Keberangkatan"
                  onChange={this.handleChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Stasiun Keberangkatan</Form.Label>
                <Form.Control
                  name="start_station"
                  type="text"
                  placeholder="Stasiun Keberangkatan"
                  onChange={this.handleChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Jam Keberangkatan</Form.Label>
                <Form.Control
                  name="start_time"
                  type="time"
                  placeholder="Jam Keberangkatan"
                  onChange={this.handleChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Stasiun Tujuan</Form.Label>
                <Form.Control
                  name="destination_station"
                  type="text"
                  placeholder="Stasiun Tujuan"
                  onChange={this.handleChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Jam Tiba</Form.Label>
                <Form.Control
                  name="arrival_time"
                  type="time"
                  placeholder="Jam Tiba"
                  onChange={this.handleChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Harga Tiket</Form.Label>
                <Form.Control
                  name="price"
                  type="text"
                  placeholder="Harga Tiket"
                  onChange={this.handleChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Qty</Form.Label>
                <Form.Control
                  name="qty"
                  type="text"
                  placeholder="Qty"
                  onChange={this.handleChangeInput}
                />
              </Form.Group>
              <button type="submit" className="btn-addtiket">
                Save
              </button>
              {isAdd
                ? (window.location.href = "http://localhost:3000/IndexAdmin")
                : null}
            </Form>
          </div>
        </Container>
        <div className="footersAddTiket"></div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    ADDTIKETR: state.ADDTIKETR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ADDTIKETA: data => dispatch(ADDTIKETA(data))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(AddTiket);
