// import { Filha1 } from "./classes/filha1.class";
// import { Filha2 } from "./classes/filha2.class";
// import { Mae } from "./classes/mae.class";

executarMae = () => {
	const mae = new Mae('Joaquina da Silva');
	mae.executar();
}

executarFilha1 = () => {
	const filha = new Filha1('Carolina');
	filha.executar();
}

executarFilha2 = () => {
	const filha = new Filha2();
	filha.executar();
}

// Classe Mãe
class Mae {
	constructor(nome){
		this.nome = nome;
	}

	executar(){
		console.log("Mãe - Executar");
		this.mostrarNome();
		this.passo1();
		this.passo2();
	}

	mostrarNome(){
		console.log('Nome', this.nome);
	}

	passo1(){
		console.log("Mae - Passo 1");
	}

	passo2(){
		console.log("Mae - Passo 2");
	}
}

// Classe Filha 1
class Filha1 extends Mae {
	executar(){
		console.log("Filha 1 - Executar");
		this.mostrarNome();
		this.passo1();
		this.passo2();
	}

	passo1(){
		console.log("Filha 1 - Passo 1");
	}

	passo2(){
		console.log("Filha 1 - Passo 2");
	}
}

// Classe Filha 2
class Filha2 extends Mae {
	constructor(){
		super('Rafaela');
	}

	executar(){
		console.log("Filha 2 - Executar");
		super.executar();
		this.passo3();
	}

	mostrarNome(){
		console.log('Filha 2 - O nome é:', this.nome);
	}

	passo2(){
		console.log("Filha 2 - Passo 2");
	}

	passo3(){
		console.log("Filha 2 - Passo 3");
	}
}