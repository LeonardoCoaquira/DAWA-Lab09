  import { Component } from '@angular/core';

  @Component({
    selector: 'app-image-list',
    templateUrl: './image-list.component.html',
    styleUrls: ['./image-list.component.css']
  })
  export class ImageListComponent {
    images = [
      {
        title: 'Playa',
        description: 'Playa para vacacionar',
        url: 'assets/playa.jpeg'
      },
      {
        title: 'Bosque',
        description: 'Imagen de un bosque',
        url: 'assets/bosque.jpeg'
      },
      {
        title: 'Arbol',
        description: 'Solo un arbol solitario',
        url: 'assets/arbol.jpeg'
      },
      {
        title: 'Catarata en Peru',
        description: 'Catarata ubicada en Peru, atraccion para turistas',
        url: 'assets/catarata.jpeg'
      },
    ];
  }
