import React from "react";

import styled from 'styled-components';

const B = styled.button`

background-color: white;
color: black;
font-weight: bold;
font-size:30px;
border: 3px solid white;
border-radius: 7px;
width: 200px;
margin: 20px;
margin-top:30px;
height: 60px;

&:hover {
    background-color: black;
    color: white;
}

`;

class BtnNext extends React.Component {


    render() {
        return <B onClick = {() => this.props.click()}>not here</B>;
    }

}

export default BtnNext;