class CommandParser{
    constructor(drone){
        //RECUPERA A LINHA DIGITADA
        this.parse.Command = function parseCommand(line){
            if (line == 'takeoff') {
                drone.onTakeoff()
                return true
            }
            if (line == 'land') {
                drone.onLand()
            }
            if (line == 'battery') {
                drone.onBattery(line)
            }
            if (line == 'flip') {
                drone.onFlip(line)
            }
            //começando com forward - pegando a distancia
            if (line.startWith ('forward')) {
                const [,dist] = line.split(" ")
                drone.onForward(dist)
                return true
            }
            //começando com back - pegando a distancia
            if (line.startWith ('back')) {
                const [,dist] = line.split(" ")
                drone.onBack(dist)
                return true
            }
            //começando com right - pegando a distancia
            if (line.startWith ('right')) {
                const [,dist] = line.split(" ")
                drone.onRight(dist)
                return true
            }
            //começando com left - pegando a distancia
            if (line.startWith ('left')) {
                const [,dist] = line.split(" ")
                drone.onLeft(dist)
                return true
            }

            return false
        }

    }
}

module.exports = CommandParser;