import server from "./configs/index.config";

const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log('Server started running on port', PORT));