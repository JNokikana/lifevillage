import Const from './const';

let receivedData;

const socket = new WebSocket(Const.API_SOCKET_PATH);

function receiveMessage(event) {
    console.log('Message from server ', event.data);
    receivedData = event.data;
}

socket.addEventListener('open', function (event) {
    console.log("Connection opened");
});
socket.addEventListener('message', receiveMessage);

export function getRecentState() {
    return receivedData;
}

export function syncRequest(){
    socket.send(JSON.stringify({ data: "sync" }));
}