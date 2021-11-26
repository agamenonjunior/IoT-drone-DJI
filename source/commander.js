class Commander{

    constructor(socket,host, port){
        this.socket = socket;
        this.host = host;
        this.port = port;
    }
    //COMANDO INICIAL
    sendInitCommand(){
        return new Promise((res,rej)=>{
            //ENVIA UMA STRING NO COMANDO SDK
            this.socket.send('command', 0, 'command'.length, this.port,this.host, (error)=>{
                if (error) {
                    return rej(error)
                }else{
                    return res()
                }
            })
        })
    }
    //DECOLANDO
    sendTakeoff(){
        return new Promise((res,rej)=>{
            this.socket.send('takeoff', 0, 'takeoff'.length, this.port,this.host, (error)=>{
                if (error) {
                    return rej(error)
                }else{
                    return res()
                }
            })
        })
    }
    //POUSAR
    sendLand(){
        return new Promise((res,rej)=>{
            this.socket.send('takeoff', 0, 'takeoff'.length, this.port,this.host, (error)=>{
                if (error) {
                    return rej(error)
                }else{
                    return res()
                }
            })
        })
    }
    //MOVER PARA FRENTE EM CM
    sendForward(distance=20){
        return new Promise((res,rej)=>{
            this.socket.send(`forward ${distance}`, 0, `forward ${distance}`, this.port,this.host, (error)=>{
                if (error) {
                    return rej(error)
                }else{
                    return res()
                }
            })
        })
    }
    //MOVER PARA TRÁS EM CM
    sendBack(distance=20){
        return new Promise((res,rej)=>{
            this.socket.send(`back ${distance}`, 0, `back ${distance}`, this.port,this.host, (error)=>{
                if (error) {
                    return rej(error)
                }else{
                    return res()
                }
            })
        })
    }

    //MOVER PARA DIREITA EM CM
    sendRight(distance=20){
        return new Promise((res,rej)=>{
            this.socket.send(`right ${distance}`, 0, `right ${distance}`, this.port,this.host, (error)=>{
                if (error) {
                    return rej(error)
                }else{
                    return res()
                }
            })
        })
    }

    //MOVER PARA ESQUERDA EM CM
    sendLeft(distance=20){
        return new Promise((res,rej)=>{
            this.socket.send(`left ${distance}`, 0, `left ${distance}`, this.port,this.host, (error)=>{
                if (error) {
                    return rej(error)
                }else{
                    return res()
                }
            })
        })
    }
    //REALIZA UM FLIP A DIREITA
    sendFlip(distance=20){
        return new Promise((res,rej)=>{
            this.socket.send(`Flip b ${distance}`, 0, `Flip b ${distance}`, this.port,this.host, (error)=>{
                if (error) {
                    return rej(error)
                }else{
                    return res()
                }
            })
        })
    }
    //REALIZA UM FLIP A DIREITA
    getBattery(){
        return new Promise((res,rej)=>{
            this.socket.send(`Battery ${distance}`, 0, `Battery ${distance}`, this.port,this.host, (error)=>{
                if (error) {
                    return rej(error)
                }else{
                    return res()
                }
            })
        })
    }

}
module.exports = Commander;