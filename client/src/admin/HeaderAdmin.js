import React, { Component } from "react";
import "./IndexAdmin.css";
import "./HeaderAdmin.css";
import AddTiket from "./AddTiket";
import { Link } from "react-router-dom";

class HeaderAdmin extends Component {
  removeClick = () => {
    window.localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  };
  render() {
    return (
      <div className="Adminheader">
        <img className="landticc" src={require("./Img/landtick.PNG")} />
        <div class="dropdown">
          <img className="profileorang" src={require("./Img/orang.PNG")} />
          <div class="dropdown-child" style={{ marginTop: "6px" }}>
            <div>
              <Link to="/AddTiket">
                <img
                  className="tambahtiketdropadmin"
                  src={require("./Img/tambahtiket.PNG")}
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
                  Tambah Tiket
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
              <Link to="/IndexAdmin">
                <img
                  className="admindropdownlogout"
                  src={require("./Img/logoutdropdown.PNG")}
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

        <p>Admin</p>
      </div>
    );
  }
}

export default HeaderAdmin;
