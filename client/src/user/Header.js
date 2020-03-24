import React, { Component } from "react";
import ALBeranda from "./ALBeranda";
import "./ALBeranda.css";
import Ticket from "./Ticket";
import Payment from "./Payment";
import ApproveTiket from "./ApproveTiket";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { cekUser } from "../_actions/LoginA";
import { cekUserRegis } from "../_actions/RegisterA";
class Header extends Component {
  removeClick = () => {
    window.localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  };

  componentDidMount() {
    this.props.cekUser();
    this.props.cekUserRegis();
  }
  render() {
    const { data } = this.props.user;

    console.log("asdasds", data);
    return (
      <div className="ALheaders">
        <p>Land Tick</p>
        <div class="dropdown">
          <img className="ALBerandalogin" src={require("./Image/orang.PNG")} />

          <div class="dropdown-child">
            <div>
              <Link to="/Ticket">
                <img
                  className="dropdownkereta"
                  src={require("./Image/keretadropdown.PNG")}
                />
                <p
                  style={{
                    marginLeft: "60px",
                    marginTop: "-30px",
                    color: " #878787 ;",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  Kereta Saya
                </p>
              </Link>
            </div>
            <div>
              <Link to="/Payment">
                <img
                  className="dropdownpayment"
                  src={require("./Image/dropdownpayment.PNG")}
                />
                <p
                  style={{
                    marginLeft: "60px",
                    marginTop: "-30px",
                    color: " #878787 ;",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  Payment
                </p>
              </Link>
            </div>
            <hr
              style={{
                width: "180px",
                border: "bold",
                background: "#EC7A7A "
              }}
            ></hr>
            <div>
              <Link to="/Beranda">
                <img
                  className="dropdownlogout"
                  src={require("./Image/logoutdropdown.PNG")}
                />
                <p
                  style={{
                    marginLeft: "61px",
                    marginTop: "-32px",
                    color: " #878787 ;",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                  onClick={this.removeClick}
                >
                  Logout
                </p>
              </Link>
            </div>
          </div>
        </div>
        <h3>{data.nama}</h3>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    user: state.LOGINR,
    userR: state.REGISR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cekUser: () => dispatch(cekUser()),
    cekUserRegis: () => dispatch(cekUserRegis())
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(Header);
