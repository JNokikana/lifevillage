import React from 'react';
import Const from '../util/const.js';

let ws;

class App extends React.Component {
    constructor(props){
        super(props);
        ws = new WebSocket(Const.API_PATH);
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                Moro
            </div>
        );
    }
}

export default App;