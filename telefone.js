export class Telefone{
    constructor(ddd,numero){
        this.ddd = ddd;
        this.numero = numero;
    }

    getDddMaiuscula() {
        return String(this.ddd).toUpperCase();
    }

    getDddMinuscula() {
        return String(this.ddd).toLowerCase();
    }

    getNumeroMaiuscula() {
        return String(this.numero).toUpperCase();
    }

    getNumeroMinuscula(){
        return String(this.numero).toLowerCase();
    }

    toString() {
        return `(${this.ddd}) ${this.numero}`;
    }
}