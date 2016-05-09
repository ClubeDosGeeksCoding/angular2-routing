import {Component} from 'angular2/core';

@Component({
	templateUrl: "views/pessoa.html"
})
export class PessoaComponent {
	private pessoas: PessoaComponent[];
	constructor() {
		this.pessoas = [
			{ id: 1, name:'Jayr', email:"jayr@clubedosgeeks.com.br"},
			{ id: 2, name: "teste", email: "teste@clubedosgeeks.com.br" }
		];
	}
}