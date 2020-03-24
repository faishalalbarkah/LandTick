import React, { Component, useState } from "react";
import ALBeranda from "./ALBeranda";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GETTIKETA } from "../_actions/GetTiketA";
import { connect } from "react-redux";
import Axios from "axios";

class KonfirmasiTiket extends Component {
  constructor() {
    super();
    this.state = {
      Show: false,
      result: []
      // number: 0,
      // id: 0
    };
  }

  // postOrder = async e => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const reqData = {
  //       qty: 1,
  //       total_price: this.state.data.data.price,
  //       status: "Pending",
  //       id_tiket: this.state.data.data.id
  //     };
  //     console.log(reqData);
  //     await Axios({
  //       method: "POST",
  //       url: "http://localhost:4300/api/v2/order",
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       },
  //       data: reqData
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  handleClick = e => {
    const token = localStorage.getItem("token");
    try {
      // console.log(reqData);
      Axios({
        method: "POST",
        url: `http://localhost:4300/api/v2/order/${e.id}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
        // data: reqData
      }).then(ress => {
        console.log(ress);
      });
    } catch (error) {
      console.log(error.message);
    }
    this.setState({
      Show: !this.state.Show
    });
    // console.log(anjing);
  };

  waktu(time1, time2) {
    let x = time1;
    let y = time2;

    let jam_x = parseInt(x.substring(0, 2)) * 60;
    let jam_y = parseInt(y.substring(0, 2)) * 60;
    let menit_x = parseInt(x.substring(3, 5));
    let menit_y = parseInt(y.substring(3, 5));
    let hasil_x = jam_x + menit_x;
    let hasil_y = jam_y + menit_y;
    let selisih = hasil_y - hasil_x;
    let jam = Math.floor(selisih / 60);
    let menit = selisih - jam * 60;

    if (jam < 0) jam = jam * -1;
    let time = jam + "jam " + menit + "menit";
    return time;
  }

  componentDidMount() {
    this.props.GETTIKETA();
    // alert("gg");
  }
  // componentDidMount() {
  //   this.props.spesA();
  // }
  render() {
    const { datagettiket } = this.props.GETTIKETR;
    // const hasil = start_time - arrival_time;
    // console.log("ASSAD => ", datagettiket);
    return (
      <>
        {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}

        {datagettiket.ticket
          ? datagettiket.ticket.map((index, key) => (
              <div
                key={key}
                // value={index.id}
                className="pesanan1"
                onClick={() => this.handleClick(index)}
                // onClick={this.getOrder}
              >
                <table style={{ marginLeft: "20px" }}>
                  <tr>
                    <th style={{ paddingTop: "30px", paddingLeft: "100px" }}>
                      {index.nama_train}
                    </th>
                    <div id="classtypetrain">
                      <p>{index.type_train.name_type_train}</p>
                    </div>
                    <th style={{ paddingTop: "30px", paddingLeft: "117px" }}>
                      {index.start_time}
                    </th>
                    <div id="classstasiunawal">
                      <p>{index.start_station}</p>
                    </div>
                    <th style={{ paddingTop: "30px", paddingLeft: "93px" }}>
                      {index.arrival_time}
                    </th>
                    <div id="classstasiunakhir">
                      <p>{index.destination_station}</p>
                    </div>
                    <th style={{ paddingTop: "30px", paddingLeft: "120px" }}>
                      <p>{this.waktu(index.start_time, index.arrival_time)}</p>
                    </th>
                    <th style={{ paddingTop: "30px", paddingLeft: "210px" }}>
                      {index.price}
                    </th>
                  </tr>
                  {/* <Buy id={index.id} /> */}
                </table>
              </div>
            ))
          : null}

        <Modal
          show={this.state.Show}
          // onHide={this.handleClick}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <p style={{ textAlign: "center" }}>
            Tiket anda berhasil di tambahkan silahkan segera melakukan
            pembayaran Klik
            <Link to="/Ticket">
              <strong>disini</strong>
            </Link>
          </p>
        </Modal>
      </>
    );
  }
}

const mapStateToProp = state => {
  return {
    GETTIKETR: state.GETTIKETR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GETTIKETA: () => dispatch(GETTIKETA())
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(KonfirmasiTiket);
