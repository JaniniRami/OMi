import React from 'react';

import styled from 'styled-components';

const Back = styled.button`

    height: 50px;
    width: 50px;
    border-radius: 50px;
    font-weight: bold;
    font-size: 28px;
    background: white;
    position: fixed;
    left: 25px;
    top: 25px;
    border: none;

`;

class BtnBack extends React.Component {

    upTop = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
        return <Back onClick = {this.upTop}>▲</Back>;
    }

}

export default BtnBack;