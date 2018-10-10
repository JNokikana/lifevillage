import Const from './const';

let receivedData;

function receiveMessage(event){
    console.log('Message from server ', event.data);
    receivedData = event.data;
}

class ApiListener {
    constructor(){
        const socket = new WebSocket(Const.API_SOCKET_PATH);

        socket.addEventListener('open', function (event) {
            console.log("Connection opened");
        });
        socket.addEventListener('message', receiveMessage);
    }
    getRecentState(){
        return receivedData;
    }
}

export default new ApiListener();