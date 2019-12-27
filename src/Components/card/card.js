import React, { Component } from "react";
import "./card.css";
import IndCard from "./IndCard";
import logo from "./24px.svg" ;


class Carder extends Component{
    render(){
        return(
            <div className="screen">
                <div className="mainCard">
                    <div style={{display:"flex",flexDirection:"column",height:"75%",justifyContent:"space-around"}}>
                        <IndCard title="Bonafide Certificate" image={logo}/>
                    </div>
                </div>
            </div>
        )
    
    }

}
export default Carder;

