import React from 'react';
import Const from '../util/const.js';
import * as SocketHandler from '../controller/socker-handler.js';

let ws;

class App extends React.Component {
    constructor(props) {
        super(props);
        ws = new WebSocket(Const.API_PATH);
        ws.addEventListener('open', SocketHandler.openConnection);
        ws.addEventListener('message', SocketHandler.receiveMessage);
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