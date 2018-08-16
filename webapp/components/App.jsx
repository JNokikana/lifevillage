import React from 'react';
import Const from '../util/const.js';
let ws;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Kikkeli"
        }

        this.openConnection = this.openConnection.bind(this);
        this.receiveMessage = this.receiveMessage.bind(this);

        ws = new WebSocket(Const.API_PATH);
        ws.addEventListener("open", this.openConnection);
        ws.addEventListener("message", this.receiveMessage);
    }
    openConnection(event) {
        console.log("Marco");
        ws.send(JSON.stringify({ message: 'Marco' }));
    }
    receiveMessage(event){
        console.log("Polo", event.data);
        this.setState({message: event.data})
    }
    render() {
        return (
            <div>
                Moro
                {this.state.message}
            </div>
        );
    }
}

export default App;