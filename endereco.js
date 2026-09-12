export class Endereco {
    constructor(estado,numero , rua, cidade) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    getEstadoMaiuscula() { 
        return this.estado.toUpperCase(); 
    }
    getEstadoMinuscula() { 
        return this.estado.toLowerCase(); 
    }

    getCidadeMaiuscula() { 
        return this.cidade.toUpperCase(); 
    }
    getCidadeMinuscula() { 
        return this.cidade.toLowerCase(); 
    }

    getRuaMaiuscula() { 
        return this.rua.toUpperCase(); 
    }
    getRuaMinuscula() { 
        return this.rua.toLowerCase(); 
    }

    getNumeroMaiuscula() { 
        return String(this.numero).toUpperCase(); 
    }
    getNumeroMinuscula() { 
        return String(this.numero).toLowerCase(); 
    }
}