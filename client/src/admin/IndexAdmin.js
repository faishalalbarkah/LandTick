import React, { Component } from "react";
import { Container, ButtonToolbar } from "react-bootstrap";
import "./IndexAdmin.css";
import ModalInvoice from "./ModalInvoice";
import EditStatus from "./EditStatus";
import HeaderAdmin from "./HeaderAdmin";
import { Redirect } from "react-router-dom";
import { DashAc } from "../_actions/DashA";
import { connect } from "react-redux";

class IndexAdmin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.DashAc();
  }

  render() {
    // const order = this.props.DashR;
    const { datadash } = this.props.DashRe;
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/" />;
    }
    let no = 1;
    // const { datadash } = this.props.DashR;
    return (
      <div>
        {/* <div className="Adminheader">
          <img className="landticc" src={require("./Img/landtick.PNG")} />
          <img className="profileorang" src={require("./Img/orang.PNG")} />
          <p>Admin</p>
        </div> */}
        <HeaderAdmin />
        <div className="AdminBody">
          <p>List Transaksi</p>
        </div>
        <div className="AdminTable">
          <Container>
            {/* <table> */}
            <tr>
              <th style={{ paddingLeft: "100px" }}>No</th>
              <th style={{ paddingLeft: "84px" }}>Users</th>
              <th style={{ paddingLeft: "100px" }}>Tiket</th>
              <th style={{ paddingLeft: "135px" }}>Bukti Transfer</th>
              <th style={{ paddingLeft: "50px" }}>Status Payment</th>
              <th style={{ paddingLeft: "83px" }}>Action</th>
            </tr>
            {/* <div >
                <br></br>
                <br></br>
              </div> */}
            <div style={{ minHeight: "520px" }}>
              {datadash
                ? datadash.map((index, key) => (
                    <tr key={key}>
                      <td style={{ paddingLeft: "100px" }}>{no++}</td>
                      <td style={{ paddingLeft: "100px" }}>
                        {index.user.nama}
                      </td>
                      <td
                        style={{ paddingLeft: "100px" }}
                      >{`${index.tiket.start_station} - ${index.tiket.destination_station}`}</td>
                      <td style={{ paddingLeft: "100px" }}>
                        {index.attachment}
                      </td>
                      <td style={{ paddingLeft: "100px" }}>
                        <h5>{index.status}</h5>
                      </td>
                      <td style={{ paddingLeft: "90px" }}>
                        <ButtonToolbar>
                          <ModalInvoice id={index} />
                        </ButtonToolbar>
                        <ButtonToolbar>
                          <EditStatus data={index} />
                        </ButtonToolbar>
                        {/* <img id="pensil" src={require("./Img/pensil.PNG")} /> */}
                        <img id="delete" src={require("./Img/delete.PNG")} />
                      </td>
                    </tr>
                  ))
                : null}
            </div>
            {/* </table> */}
          </Container>
        </div>
        <div className="footersAdmin"></div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    DashRe: state.DashRe
  };
};

const mapDispatchToProps = dispatch => {
  return {
    DashAc: () => dispatch(DashAc())
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(IndexAdmin);
