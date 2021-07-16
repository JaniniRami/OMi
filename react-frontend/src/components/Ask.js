import React from 'react';

import styled from 'styled-components';

const Above = styled.div`
    height: 50px;
`;

const AskWrap = styled.section`
        width: 75%;
        min-width: 300px;
        color: white;
        display: block;
        margin: auto;
        margin-bottom: 40px;
        font-weight: bold;
        font-size: 60px;
    `;

class Ask extends React.Component {


    state = {
        text: "Tell us about your symptoms!",
    }


    

    render (){

        return <section>
            <Above />
            <AskWrap>{this.state.text}</AskWrap>;
        </section>
    }

    setText = (value) => {
        this.setState({text: value});
    }

}

export default Ask;