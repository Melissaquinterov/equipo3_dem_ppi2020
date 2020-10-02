import React from "react";
import "../style/style.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container, header">
        <div className="row">
          <div className="col text-center">
          
            <p className="openShop">
              Openshop
            </p>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Header;