const readline = require('readline')
const { createSocket} = require('dgram') // COMUNICACAO UDP
const CommandParser = require('./CommandParser')
const CommandParser = require('./Commander')

const rl = readline.createInterface({
    //entra e saida das informacoes
    input:process.stdin,
    output:process.stdout
});

const TELLO_CMD_PORT = 8899
const TELLO_HOST = '192.168.10.1'

const getSocket = ()=>{

    const socket = createSocket('udp4')
    //ligando a porta
    socket.bind(TELLO_CMD_PORT)
    return socket
}

(async function start(){
    const socket = getSocket()
    //enviando dados para o construtor
    const cmder = new Commander(socket, TELLO_HOST,TELLO_CMD_PORT)
    //iniciando o drone
    await cmder.sendInitCommand({
        // modulo de configuracao do drone
        onTakeoff: async ()=>{ await cmder.sendTakeoff()},
        onLand: async ()=>{ await cmder.sendLand()},
        onForward: async (dist)=>{ await cmder.sendForward(dist)},
        onBack: async (dist)=>{ await cmder.sendBack(dist)},
        onRight: async (dist)=>{ await cmder.sendRight(dist)},
        onLeft: async (dist)=>{ await cmder.sendLeft(dist)},
        onFlip: async ()=>{ await cmder.sendFlip()},
        onBattery: async ()=>{ await cmder.getBattery()}
    })
    console.log(`iniciando...`)
    socket.on('message',(msg)=>{
        console.log(`DRONE DJI TELLO: ${msg.toString()}`)
    })
    //MSG DE ERROR
    socket.on('error',(err)=>{
        console.log(`DRONE DJI TELLO ERROR: ${err}`)
    })
    //TUDO PRONTO - ESCUTANDO
    socket.on('listening',(err)=>{
        console.log(`Socket is listening...`)
    })
    //ENTRE COM UM COMANDO
    console.log(`Enter a Command...`)
    //CAPTURANDO A LINHA
    rl.on('line',(line)=>{
        if (!cmdp.ParseCommand(line)) {
           if (line =='exit') {
            console.log('saindo..')
            process.exit(0)
           }
           console.log('NOT VALID COMMAND')
        }
    })
    
})()


