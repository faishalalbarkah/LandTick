import React, { Component } from "react";
import { Row, Col, ButtonToolbar } from "react-bootstrap";
import ModalKonfrimasi from "./ModalKonfirmasi";
import "./Payment.css";
import Header from "./Header";
import { getPaymnentA } from "../_actions/PaymentA";
import { USERTIKETA } from "../_actions/UserTiketGet";
import { getPaymentR } from "../_reducers/PaymentR";
import { connect } from "react-redux";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
  }

  componentDidMount() {
    const getId = window.location.href;
    const id = getId.substr(33, 10);

    this.props.getPaymnentA(id);
  }
  // componentDidMount() {
  //   this.props.getPaymnentA();
  // }
  // componentDidMount() {
  //   // const { fromNotifications } = this.props.location.state;
  //   // console.log(fromNotifications);
  //   // fetch(`https://api.twitter.com/user/${handle}`)
  //   //   .then((user) => {
  //   //     this.setState(() => ({ user }))
  //   //   })
  // }

  getPayId = e => {
    this.props.getPaymnentA(this.props.id);
    // this.setState({ value: e.target.id });
  };
  render() {
    const { dataPayment } = this.props.getPaymentR;

    let username = "";
    let phone = "";
    let email = "";
    //tiket
    let nama_train = "";
    let price = "";
    let start_time = "";
    let arrival_time = "";
    let start_station = "";
    let destination_station = "";
    //order
    let total_price = "";

    let name_type_train = "";

    if (dataPayment[0]) {
      if (dataPayment[0].user) {
        username = dataPayment[0].user.username;
        phone = dataPayment[0].user.phone;
        email = dataPayment[0].user.email;
        if (dataPayment[0].tiket) {
          nama_train = dataPayment[0].tiket.nama_train;
          price = dataPayment[0].tiket.price;
          start_time = dataPayment[0].tiket.start_time;
          arrival_time = dataPayment[0].tiket.arrival_time;
          start_station = dataPayment[0].tiket.start_station;
          destination_station = dataPayment[0].tiket.destination_station;
          if (dataPayment[0].tiket.type_train) {
            name_type_train = dataPayment[0].tiket.type_train.name_type_train;
          }
          if (dataPayment[0]) {
            total_price = dataPayment[0].total_price;
          }
        }
      }
    }
    console.log(username);

    // const AllData = this.props.id;
    // console.log("data =>", DataAll);
    // console.log(this.props.locatio);

    return (
      <div>
        <Header />

        <div className="Paymentbodyleft">
          <div className="invoicepayment">
            <p>Invoice</p>
          </div>
          <div className="AlertPayment">
            <img src={require("./Image/tandaalert.PNG")} />
            <p>
              Silahkan melakukan pembayaran melalui M-Banking, E-Banking dan ATM
              ke No.rek Yang Tertera.
            </p>
            <span>No.Rek : 0987896082</span>
          </div>
          <div className="Paymentlendtic">
            <div className="isipaymentkiri">
              <img src={require("./Image/landtickbackground.PNG")} />
            </div>
            <div id="paymenttandapengenal">
              <p>No. Tanda Pengenal</p>
            </div>
            <div id="paymentnamapemesan">
              <p>Nama Pemesan</p>
            </div>
            <div id="paymentnohp">
              <p>No. Handphone</p>
            </div>
            <div id="paymentemail">
              <p>Email</p>
            </div>
            <hr></hr>

            <div id="isipaymenttandapengenal">
              <p>090808909</p>
            </div>
            <div id="isipaymentnamapemesan">
              <p>{username}</p>
            </div>
            <div id="isipaymentnohp">
              <p>{phone}</p>
            </div>
            <div id="isipaymentemail">
              <p>{email}</p>
            </div>
          </div>
          <div className="rincianharga">
            <h3>Rincian Harga</h3>
          </div>
          <div className="tabelpayment">
            <h5>{nama_train}</h5>
            <p>{price}</p>
            <div className="Paymenttotal">
              <p>Total :</p>
              <h3>{total_price}</h3>
            </div>
            <ButtonToolbar>
              <ModalKonfrimasi />
            </ButtonToolbar>
            {/* <div className="btn-Payment">
              <button type="submit">Bayar Sekarang</button>
            </div> */}
            <div className="buktiPayment">
              <img src={require("./Image/buktitrf.jpg")} />
            </div>
          </div>
        </div>

        <div className="Paymentbodyright">
          <div id="barcodekeretapii">
            <h3>Kereta Api</h3>
            <h4>Saturday, 21 Febuari 2020</h4>
            <img src={require("./Image/barcodeabu.PNG")} />
          </div>
          <div id="barcodekeretapiibawah">
            <h3>{nama_train}</h3>
            <p>{name_type_train}</p>
            <img src={require("./Image/atasbawahabu.PNG")} />
          </div>
          <div id="jamberangkat">
            <h3>{start_time}</h3>
            <p style={{ color: "#959595" }}>21 Febuari 2020</p>
          </div>
          <div id="jamsampai">
            <h3>{arrival_time}</h3>
            <p style={{ color: "#959595" }}>21 Febuari 2020</p>
          </div>
          <div id="stasiunstart">
            <h3>Jakarta (GMR)</h3>
            <p style={{ color: "#959595" }}>{start_station}</p>
          </div>
          <div id="stasiunend">
            <h3>Surabaya (SBY)</h3>
            <p style={{ color: "#959595" }}>{destination_station}</p>
          </div>
        </div>
        {/* {console.log("getorderr", this.props.getPaymentR)} */}
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    USERTIKETR: state.USERTIKETR,
    getPaymentR: state.getPaymentR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    USERTIKETA: () => dispatch(USERTIKETA()),
    getPaymnentA: id => dispatch(getPaymnentA(id))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(Payment);
