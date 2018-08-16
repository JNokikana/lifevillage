export function openConnection(event) {
    console.log("Marco");
    ws.send(JSON.stringify({ message: 'Marco' }));
}
export function receiveMessage(event) {
    console.log("Polo", event.data);
}