import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroes: string[] = ['Spidermar', 'IronMan', 'CapAmerica', 'Hulk'];
  heroeBorrado: string|undefined = '';

  borrarHeroe(){
this.heroeBorrado =  this.heroes.shift() || '';

  }

}
