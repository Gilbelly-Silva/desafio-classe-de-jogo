class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;
        
        switch(this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
        }

        /*if(this.tipo === "mago"){
            ataque = "magia";
        }else if(this.tipo === "guerreiro"){
            ataque = "espada";
        }else if(this.tipo === "monge"){
            ataque = "artes marciais";
        }else if(this.tipo === "ninja"){
            ataque = "shuriken";
        }*/

        console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }

}

let heroi1 = new heroi("Paulo", "21", "ninja")
heroi1.atacar()
let heroi2 = new heroi("Ana", "19", "guerreiro")
heroi2.atacar()
