class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        var idade = idade;
    }

    apresentar(){
        console.log(`\nNome: ${this.nome} \nIdade: ${this.retonarIdade}`)
    }

    get retonarIdade(){
        return this.idade;
    }

    set atribuindoIdade(novaIdade){
        this.novaIdade = novaIdade
    }
}

class Aluno extends Pessoa{
    constructor(nome, idade, matricula){
        super(nome, idade);
        this.matricula = matricula
    }

    mostrar(){
        console.log(`\nAluno:\nNome: ${this.nome}\nIdade: ${this.retonarIdade}\nMatricula: ${this.matricula}`)
    }
}

class Animal{
    falar(){

    }
}

class Gato extends Animal{
    falar(){
        console.log("Miau")
    }
}

class Cachorro extends Animal{
    falar(){
        console.log("Au, au.")
    }
}


const pessoa1 = new Pessoa("Lamartine", 35)

const aluno1 = new Aluno("Cezar", 25, 123)

const gato = new Gato()
const cachorro = new Cachorro()

pessoa1.apresentar()
aluno1.mostrar()
gato.falar()
cachorro.falar()




