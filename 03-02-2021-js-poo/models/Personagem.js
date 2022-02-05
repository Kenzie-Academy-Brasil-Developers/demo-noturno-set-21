// CLASSE PERSONAGEM
// Nome
// Vida
// Equipamento
// Poder
// Nível
// Velocidade
// Estamina
// Força
// Defesa
// Inteligência


/**
 * Sugar Syntax
 */
class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this._vida = vida;
        this.vidaMax = 15;
        this.nivel = 0;
        this.equipamento = [];
        this.velocidade = 10;
        this.estamina = 10;
        this.forca = 10;
        this.defesa = 10;
        this.inteligencia = 10;
        this.poder = null;
    }

    //Atribuir
    set vida(novaVida) {
        //!isNaN(novaVida)          -> Certificando que apenas numéricos passem
        //novaVida <= this.vidaMax  -> Certificando que apenas valores menores que vida maxima passem
        if (!isNaN(novaVida) && novaVida <= this.vidaMax) {
            this._vida = novaVida;
        }
    }

    get vida() {
        return `O ${this.nome} tem ${this._vida} de vida`;
    }

    dormir() {
        this.vida++;
    }
    
    meMostrarAoMundo() {
        console.log(this);
    }
}

/**
 * Função Construtora
 */
// function Personagem(nome, vida) {
//     this.nome = nome;
//     this.vida = vida;
//     this.nivel = 0;
//     this.equipamento = [];
//     this.velocidade = 10;
//     this.estamina = 10;
//     this.forca = 10;
//     this.defesa = 10;
//     this.inteligencia = 10;
//     this.poder = null;
// }

const personagemPaulo = new Personagem("Paulo", 10);


console.log(personagemPaulo.vida)