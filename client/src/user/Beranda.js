import React, { Component } from "react";
import { Row, Col, Container, ButtonToolbar } from "react-bootstrap";
import Modallogin from "./Modallogin";
import Register from "./Register";
import "./Beranda.css";
import { GETTIKETA } from "../_actions/GetTiketA";
import { connect } from "react-redux";

class Beranda extends Component {
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
  render() {
    const { datagettiket } = this.props.GETTIKETR;
    return (
      <>
        <div>
          <div className="headers">
            <p>Land Tick</p>

            <ButtonToolbar>
              <Modallogin />
            </ButtonToolbar>

            <ButtonToolbar>
              <Register />
            </ButtonToolbar>
          </div>

          <div className="slider1">
            <div className="fortext">
              <h2>Selamat Pagi, Ticket Seekers !</h2>
              <span>ingin Pulkam dengan Good Deal ?</span>
              <p>Masuk dan Daftar Sekarang!!!</p>
            </div>
            <div>
              <img className="image2" src={require("./Image/image2.jpg")} />
              <img className="image1" src={require("./Image/image1.jpg")} />
            </div>
          </div>

          <div className="tiketapi">
            <div className="tiketapigrounddlm">
              <div className="pembungkusiconkereta">
                <img
                  className="kereta"
                  src={require("./Image/iconkereta.png")}
                />
                <p style={{ marginLeft: "100px", marginTop: "-30px" }}>
                  Tiket Kereta Api
                </p>
              </div>
            </div>
            {/* tiket api  */}
            <div className="tiketapitengah">
              <p>Tiket Kereta Api</p>
              <div id="isitiketapi">
                <h3>Asal</h3>
                <input className="asal" type="text" />

                <input className="chekbox" type="checkbox" />
                <p
                  style={{
                    fontSize: "15px",
                    marginLeft: "270px",
                    marginTop: "-20px"
                  }}
                >
                  Pulang Pergi
                </p>
                <h3>Tanggal Berangkat</h3>
                <input
                  style={{
                    width: "160px",
                    height: "30px",
                    background: "#b1b1b1",
                    marginLeft: "20px",
                    borderRadius: "5px"
                  }}
                  type="date"
                />
              </div>
            </div>

            <div className="tiketapikanan">
              <h3>Tujuan</h3>
              <input className="tujuan" type="text" />

              <div>
                <h4 className="Dewasa1">Dewasa</h4>
                <input className="Dewasa" type="number" name="qty" />
              </div>
              <div>
                <h4 className="bayi1">Bayi</h4>
                <input className="Bayi" type="number" name="qty" />
                <button className="CariTiket" type="input">
                  Cari Tiket
                </button>
              </div>
            </div>
          </div>
          {/* body */}
          <div className="Body">
            <table style={{ marginLeft: "20px" }}>
              <tr>
                <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                  Nama Kereta
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                  Berangkat
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "92px" }}>
                  Tiba
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "160px" }}>
                  Durasi
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "200px" }}>
                  Harga Per Orang
                </th>
              </tr>
            </table>
            {datagettiket.ticket
              ? datagettiket.ticket.map((index, key) => (
                  <div
                    key={key}
                    // value={index.id}
                    className="pesanan1"
                    onClick={this.handleClick}
                  >
                    <table style={{ marginLeft: "20px" }}>
                      <tr>
                        <th
                          style={{ paddingTop: "30px", paddingLeft: "100px" }}
                        >
                          {index.nama_train}
                        </th>
                        <div id="classtypetrain">
                          <p>{index.type_train.name_type_train}</p>
                        </div>
                        <th
                          style={{ paddingTop: "30px", paddingLeft: "117px" }}
                        >
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
                        <th
                          style={{ paddingTop: "30px", paddingLeft: "120px" }}
                        >
                          <p>
                            {this.waktu(index.start_time, index.arrival_time)}
                          </p>
                        </th>
                        <th
                          style={{ paddingTop: "30px", paddingLeft: "210px" }}
                        >
                          {index.price}
                        </th>
                      </tr>
                    </table>
                  </div>
                ))
              : null}
            {/* <div className="pesanan2">
            <table style={{ marginLeft: "20px" }}>
              <tr>
                <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                  Argo Wills
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "120px" }}>
                  05.00
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "100px" }}>
                  10.05
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "70px" }}>
                  5j 05m
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "210px" }}>
                  Rp. 250.000
                </th>
              </tr>
            </table>
          </div> */}
            {/* <div className="pesanan3">
            <table style={{ marginLeft: "20px" }}>
              <tr>
                <th style={{ paddingTop: "30px", paddingLeft: "80px" }}>
                  Argo Wills
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "120px" }}>
                  05.00
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "100px" }}>
                  10.05
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "70px" }}>
                  5j 05m
                </th>
                <th style={{ paddingTop: "30px", paddingLeft: "210px" }}>
                  Rp. 250.000
                </th>
              </tr>
            </table>
          </div> */}
          </div>
          {/* footer */}
        </div>
        <div className="footer"></div>
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
export default connect(mapStateToProp, mapDispatchToProps)(Beranda);
