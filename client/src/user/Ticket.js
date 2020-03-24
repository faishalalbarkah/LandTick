import React, { Component } from "react";
import "./Ticket.css";
import Payment from "./Payment";
import "./ALBeranda.css";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { USERTIKETA } from "../_actions/UserTiketGet";
import { getPaymnentA } from "../_actions/PaymentA";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      redirect: false,
      goPayment: false,
      id: ""
    };
  }

  getPayment = id => {
    this.props.getPaymnentA(id);
    window.location = "/Payment?id=" + id;

    // this.setState({
    //   redirect: true,
    //   data: this.props.getPayment
    // });
  };

  componentDidMount() {
    this.props.USERTIKETA();
    // alert("gg");
  }

  // handlePayment = () => {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/Payment",
  //         state: { id: "123" }
  //       }}
  //     />
  //   );
  // };
  render() {
    // let myTiket = [];
    // if(this.props.orderKu.myOrder){
    const { datagettiketuser } = this.props.USERTIKETR;
    // console.log(this.state.data);
    // console.log(this.props.getPaymentR);
    return (
      <div>
        {/* {this.state.redirect
          ? (window.location = "/Payment?id=" + ${})
          : // <Redirect
            //   to={{
            //     pathname: `/Payment/id:${8}`
            //   }}
            // />
            ""} */}
        {/* header */}
        <Header />

        {/* body */}

        <div className="tiketsaya">
          <p>Tiket Saya</p>
        </div>
        {/* kiri */}
        {datagettiketuser.iamtiket
          ? datagettiketuser.iamtiket.map((index, key) => (
              <div key={key} className="Tiket">
                <div className="headerTiket">
                  <p>Land Ticket</p>
                </div>
                <div>
                  <h2>Kereta Api</h2>
                  <p className="tanggalotw">Saturday, 21 Febuari 2020</p>
                </div>
                <div className="bodytiket">
                  <h3>{index.tiket.nama_train}</h3>
                  <p>{index.name_type_train}</p>
                  <div className="pending">
                    <p>{index.status}</p>
                  </div>
                  <div className="tandapengenal">
                    <p>No. Tanda Pengenal</p>
                  </div>
                  <hr
                    style={{
                      marginTop: "120px"
                    }}
                  ></hr>
                  <div className="paling_bawah">
                    <p>3018978263488291</p>
                  </div>
                </div>
                {/* End-kiri */}
                {/* tengah */}
                <div>
                  <div>
                    <img
                      className="img_tengah"
                      src={require("./Image/atasbawah.PNG")}
                    />
                  </div>
                  <div className="start">
                    <h3>{index.tiket.start_time}</h3>
                    <p style={{ color: "#959595" }}>{index.date_start}</p>
                  </div>
                  <div className="end">
                    <h3>{index.tiket.arrival_time}</h3>
                    {/* <p style={{ color: "#959595" }}>{index.tiket.date_start}</p> */}
                  </div>
                  <div className="namapemesan">
                    <p>Nama Pemesan</p>
                  </div>
                  <div className="anto_bawah">
                    <p>{index.user.nama}</p>
                  </div>
                </div>
                {/* end tengah */}
                {/* kanan */}
                <div>
                  <div className="kotaberangkat">
                    <h3>Jakarta(GMR)</h3>
                    <p style={{ color: "#959595" }}>
                      {index.tiket.start_station}
                    </p>
                  </div>
                  <div className="kotasampai">
                    <h3>Surabaya(Sby)</h3>
                    <p style={{ color: "#959595" }}>
                      {index.tiket.destination_station}
                    </p>
                  </div>
                  <div className="nohp">
                    <p>No. Handphone</p>
                  </div>
                  <div className="no_hp">
                    <p>{index.user.phone}</p>
                  </div>
                  <div className="email">
                    <p>Email</p>
                    <p style={{ color: "#959595" }}>{index.user.email}</p>
                  </div>
                  {/* <Link
                    to={{
                      pathname: "/Payment"
                      // state: {
                      //   fromNotifications: true
                      // }
                    }}
                  > */}
                  <div
                    className="btn-bawah"
                    onClick={() => this.getPayment(index.id)}
                  >
                    {/* <button onClick={() => this.handlePayment()}> */}
                    <button>Bayar Sekarang</button>
                  </div>
                  {/* </Link> */}
                </div>
                {/* end kanan */}
              </div>
            ))
          : null}
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
export default connect(mapStateToProp, mapDispatchToProps)(Ticket);
