import React from 'react';

class ToControl extends React.Component {

    componentDidMount(){
        window.scrollTo(0, window.innerHeight);

    }

    render(){return <div></div>}
}

export default ToControl;