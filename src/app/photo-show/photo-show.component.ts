import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotosService } from '../photos.service'; //importo il service

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrl: './photo-show.component.css'
})
export class PhotoShowComponent {

  imageLink = ''; //creazione variabile dove allocare la response e caricarla con property binding nel template

constructor(private phostosService: PhotosService){ //injection del service nel costruttore
  this.phostosService.getPhoto().subscribe((response) => {  //la chiamata restituisce un observable quindi sottoscrizione
    //console.log(response.urls.regular);
    this.imageLink = response.urls.regular;
  });
}
  

  
}
