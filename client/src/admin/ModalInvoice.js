import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import IndexAdmin from "./IndexAdmin";
import "./ModalInvoice.css";
import { DashAc } from "../_actions/DashA";
import { connect } from "react-redux";

class ModalInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: ""
    };
  }
  handleClose = () => {
    this.setState({ show: true });
  };

  handleShow = () => {
    this.setState({ show: false });
  };

  getById = e => {
    this.props.DashById(this.props.id);
    this.handleShow();
  };

  //format date
  formatDate = dateStr => {
    let dArr = dateStr.split("-"); //input "2010-01-08"
    return dArr[2] + " " + dArr[1] + " " + dArr[0]; //18/01/08
  };

  getDaye = day => {
    let date = new Date(day);
    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    return days[date.getDay()];
  };
  render() {
    // let dataTiket, dataUser, dataOrder;

    // if (this.props.DashR.datadashid.data) {
    //   dataOrder = this.props.DashR.datadashid.data;
    //   dataTiket = this.props.DashR.datadashid.data.tiket;
    //   dataUser = this.props.DashR.datadashid.data.user;
    // }
    // console.log("asasdasdasdsd ", this.props.id);
    const AllData = this.props.id;
    console.log(AllData);

    // let status;
    // if (dataOrder) {
    //   status = dataOrder.status;
    // }

    // let date;
    // if (dataTiket) {
    //   date = dataTiket.date_start;
    // }

    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
        <img
          id="src"
          onClick={this.handleClose}
          src={require("./Img/src.PNG")}
        />
        <div>
          <Modal
            show={this.state.show}
            onHide={this.handleShow}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <div className="ModalInvoiceheaderkiri">
              <img src={require("./Img/landtickbackground.PNG")} />
            </div>
            <div className="ModalInvoiceheaderkanan">
              <p onClick={this.handleShow}>&#10060;</p>
            </div>
            <div className="ModalInvoiceBody">
              <div className="textInvoice">
                <h1>Invoice</h1>
                <p>Kode Invoice: INV0101</p>
              </div>
              <div className="MInvoiceKeretaApi">
                <h3>Kereta Api</h3>
                <p style={{ color: "#878787" }}>Saturday,21 Febuari 2020</p>
                <img
                  className="barcodmodalinvoice"
                  src={require("./Img/barcode.PNG")}
                />
              </div>
              <div className="argomodalinvoice">
                <h3>{AllData.tiket.nama_train}</h3>
                <p style={{ color: "#878787" }}>{AllData.name_type_train}</p>
              </div>
              <div className="PPmodalinvoice">
                <img src={require("./Img/atasbawah.PNG")} />
              </div>
              <div className="jamberangkatmodalinvoice">
                <h3>{AllData.tiket.start_time}</h3>
                <p style={{ color: "#878787" }}>21, Febuari 2020</p>
              </div>
              <div className="jamsampaimodalinvoice">
                <h3>{AllData.tiket.arrival_time}</h3>
                <p style={{ color: "#878787" }}>21, Febuari 2020</p>
              </div>
              <div>
                <div className="namakotamulaimodalinvoice">
                  <h3>Jakarta(GMR)</h3>
                  <p style={{ color: "#878787" }}>
                    {AllData.tiket.start_station}
                  </p>
                </div>
                <div className="namakotaendmodalinvoice">
                  <h3>Jakarta(GMR)</h3>
                  <p style={{ color: "#878787" }}>
                    {AllData.tiket.destination_station}
                  </p>
                </div>
              </div>
              <div id="uploadfotoinvoice">
                <img src={require("./Img/buktitrf.jpg")} />
              </div>
              <div className="invoicenopemesanan">
                <p>No. Tanda Pengenal</p>
                <p style={{ color: "#878787", marginLeft: "10px" }}>
                  32131242131
                </p>
              </div>
              <div className="invoicenamapemesanan">
                <p>Nama Pemesan</p>
                <p style={{ color: "#878787", marginLeft: "10px" }}>
                  {AllData.user.nama}
                </p>
              </div>
              <div className="invoicenohppemesanan">
                <p>No.Handphone</p>
                <p style={{ color: "#878787", marginLeft: "10px" }}>
                  {AllData.user.phone}
                </p>
              </div>
              <div className="invoiceemailpemesanan">
                <p>Email</p>
                <p style={{ color: "#878787", marginLeft: "5px" }}>
                  {AllData.user.email}
                </p>
              </div>
              <div className="footersmodalinvoice">
                <h3>Total: </h3>
                <h4>Rp.{AllData.total_price}</h4>
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
    DashAc: id => dispatch(DashAc(id))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(ModalInvoice);
