export class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() {
        return this.#cnpj;
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    removerTelefone(telefone) {
        this.telefones.delete(telefone);
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

    removerCliente(cliente) {
        this.clientes.delete(cliente);
    }

    getRazaoSocialMaiuscula() { 
        return this.razaoSocial.toUpperCase(); 
    }
    getRazaoSocialMinuscula() { 
        return this.razaoSocial.toLowerCase(); 
    }

    getNomeFantasiaMaiuscula() { 
        return this.nomeFantasia.toUpperCase(); 
    }
    getNomeFantasiaMinuscula() { 
        return this.nomeFantasia.toLowerCase(); 
    }

    getCnpjMaiuscula() { 
        return this.#cnpj.toUpperCase(); 
    }
    getCnpjMinuscula() { 
        return this.#cnpj.toLowerCase(); 
    }

    detalhe() {
        let texto = `Razão Social: ${this.razaoSocial}\n`;
        texto += `Nome fantasia: ${this.nomeFantasia}\n`;
        texto += `----------------\n\n`;

        const listaClientes = Array.from(this.clientes);
        texto += listaClientes.map((cliente) => cliente.detalhe()).join('\n');

        return texto;
    }
}