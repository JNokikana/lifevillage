export function gameSync(request: any, reply: any) {
    console.log(request.payload);
    return {
        payload: request.payload,
        message: "Testi on mplkplae"
    }
}