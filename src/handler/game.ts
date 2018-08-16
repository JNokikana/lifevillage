export function gameSync(request: any, reply: any) {
    console.log(request.payload);
    return {
        message: "Marco"
    }
}