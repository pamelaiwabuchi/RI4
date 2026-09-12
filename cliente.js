export class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    removerTelefone(telefone) {
        this.telefones.delete(telefone);
    }

    getNomeMaiuscula() { 
        return this.nome.toUpperCase(); 
    }
    getNomeMinuscula() { 
        return this.nome.toLowerCase(); 
    }

    getCpfMaiuscula() { 
        return this.#cpf.toUpperCase(); 
    }
    getCpfMinuscula() { 
        return this.#cpf.toLowerCase(); 
    }

    detalhe() {
        let texto = `Nome: ${this.nome}\n`;
        texto += `Estado: ${this.endereco.estado} cidade: ${this.endereco.cidade} rua: ${this.endereco.rua} numero: ${this.endereco.numero}\n`;
        this.telefones.forEach((telefone) => {
            texto += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`;
        });
        return texto;
    }
}