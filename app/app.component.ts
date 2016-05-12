import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { provide }           from 'angular2/core';

import { PessoaComponent } from './pessoa.component';
import { ProdutoComponent } from './produto.component';

@Component({
  selector: 'my-app',
  templateUrl: 'views/index.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/pessoas',
    name: 'Pessoas',
    component: PessoaComponent,
    useAsDefault: true
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: ProdutoComponent
  }
])
export class AppComponent {
}