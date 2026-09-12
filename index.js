import {Empresa} from './empresa.js';
import {Cliente} from './cliente.js';
import {Telefone} from './telefone.js';
import {Endereco} from './endereco.js';

const enderecoEmpresa = new Endereco('AM', 'Manaus', 'Avenida Djalma Batista', 1661);

const empresa = new Empresa('Altave Sistemas Ltda', 'Altave', '12.345.678/0001-90', enderecoEmpresa);
empresa.adicionarTelefone(new Telefone('92', '32341234'));
empresa.adicionarTelefone(new Telefone('92', '32345678'));

const dadosClientes = [
  { nome: 'Matusalém Souza', cpf: '111.222.333-44',
    endereco: new Endereco('Rua Ramos Ferreira', 45, 'Centro', 'Manaus', 'AM', '69010-120'),
    telefones: [new Telefone('92', '981234567'), new Telefone('92', '32341122')] },
  { nome: 'Bruno Carvalho Lima', cpf: '222.333.444-55',
    endereco: new Endereco('Avenida Governador Danilo Areosa', 210, 'Flores', 'Manaus', 'AM', '69058-050'),
    telefones: [new Telefone('92', '982345678'), new Telefone('92', '32352233')] },
  { nome: 'Carla Mendes Ferreira', cpf: '333.444.555-66',
    endereco: new Endereco('Travessa Padre Eutíquio', 78, 'Batista Campos', 'Belém', 'PA', '66023-710'),
    telefones: [new Telefone('91', '983456789'), new Telefone('91', '32363344')] },
  { nome: 'Armando Martins', cpf: '444.555.666-77',
    endereco: new Endereco('Avenida Nazaré', 320, 'Nazaré', 'Belém', 'PA', '66035-170'),
    telefones: [new Telefone('91', '984567890'), new Telefone('91', '32374455')] },
  { nome: 'Elisa Prado Nogueira', cpf: '555.666.777-88',
    endereco: new Endereco('Rua dos Mundurucus', 99, 'Jurunas', 'Belém', 'PA', '66025-660'),
    telefones: [new Telefone('91', '985678901'), new Telefone('91', '32385566')] },
];

dadosClientes.forEach((dados) => {
  const cliente = new Cliente(dados.nome, dados.cpf, dados.endereco, dados.telefones);
  dados.telefones.forEach((tel) => cliente.adicionarTelefone(tel));
  empresa.adicionarCliente(cliente);
});

console.log(empresa.detalhe());