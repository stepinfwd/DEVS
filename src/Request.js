import React from 'react';
import "./Request.css";
import certificate from "./file.png";

class Request extends React.Component {
    render() {
        return (
            <div className="requestMaindiv">
                <div className="headerDiv">
                    <div>Bonafide Certificate</div>
                    <img src={certificate} alt="certificate" />
                </div>
                <div className="bodyDiv">
                    This is to certify that Mr/Ms. Adhil Juvane is a Bonafide student of CUSAT studying in department of Computer science S7 during the duration 2016-2020.
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "10px" }}>
                        <div className="buttonRed">Cancel</div>
                        <div className="buttonGreen">Confirm</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Request;