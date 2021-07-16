import React from 'react';

class Top extends React.Component {

    componentDidMount(){
        window.scrollTo({
            top: 0,
            left: 0,
            behaviour: 'auto'
        });
    }

    render(){return <div></div>}
}

export default Top;