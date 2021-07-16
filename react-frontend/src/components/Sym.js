import React from 'react';
import head from "../img/head.png";
import cough from "../img/cough.png";
import throat from "../img/throat.png";
import rash from "../img/rash.png";
import styled from 'styled-components';
import ToControl from './ToControl';

const Sym1 = styled.button`

    @keyframes out {
        from { 
            opacity: 1;
        }
        to { 
            opacity: 0;
        }
    }

    background: #0d1117;
    color: white;
    font-size:24px;
    font-weight: bold;
    border: 3px solid white;
    border-radius: 10px;
    width: 285px;
    margin: 10px;
    vertical-align: top;
    height: 120px;
    padding: 5px;

    &:focus {
        outline: none;
        animation: out 1s;
        background-color: #e9ecf2;
        color: black;
        border: 5px solid black;
    }

    &:hover {
        background: white;
        color: black;
    }
`;

class Sym extends React.Component {

    state = {
        type: this.props.type,
        temp: "t",
        img: 0
    }

    render (){

        console.log(this.state.type);
        let x = "";
        if (this.state.type != undefined){
        let t = this.state.type.replace(" ", "%20").toLowerCase();
        
        
        
        if (t.includes("head")){
             x = head;
        }
        else if (t.includes("throat")){
            x = throat;
       }
        else if (t.includes("skin")){
            x = rash;
       }
        else if (t.includes("cough")){
            x = cough;
       }
        else x = head;

     } else {



         }

         let ret = <Sym1 onClick = {() => this.props.click(this.state.type)}> {this.props.type} </Sym1>;
        
         //if (this.state.type == "") ret = <ToControl></ToControl>;

        return ret;

    }

    scroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

}

export default Sym;