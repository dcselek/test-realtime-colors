import io from 'socket.io-client'

let socket;

export const init = () => {
    console.log("Sunucuya bağlanıyoz knks...");

    socket = io("http://localhost:3001", {
        transports: ["websocket"]
    });

    socket.on("connect",() => {
        console.log("Sunucuya bağlandık knks :))");
    })
}