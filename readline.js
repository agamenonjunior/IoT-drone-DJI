const readline = require("readline");
//CRIANDO CLI
const rl = readline.createInterface({
    //entra e saida das informacoes
    input:process.stdin,
    output:process.stdout
});

rl.question('Qual melhor drone',(answer)=>{
    console.log(`a melhor marca e ${answer}`);
    switch (answer) {
        case "command":
            console.log("ligando...");
            break;
        case "takeoff":
            console.log("decolando...");
            break;
    
        default:
            console.log("ligue o drone...");
            break;
    }
    rl.close();
});

