import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-quadres',
  templateUrl: './quadres.component.html',
  styleUrls: ['./quadres.component.scss']
})
export class QuadresComponent implements OnInit {
  midaImatges = 200;

  paginaActual = 1;
  paginesTotals = 1;
  limitQuadres = 12;

  quadres = Array<any>();

  imatge = {
    url: '',
    alt: '',
    info: false,
    nom: '',
    naixament: '',
    mort: ''
  };

  paginaAccedir = 1;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getQuadres();
  }

  getQuadres(): void {
    this.apiService.getQuadres(this.limitQuadres, this.paginaActual).subscribe((data: any) => {

      this.paginaActual = data.pagination.current_page;
      this.paginesTotals = data.pagination.total_pages;

      this.quadres = data.data;

      this.paginaAccedir = this.paginaActual;
    });
  }

  canviarPagina(pagina: number): void {
    this.paginaActual = pagina;
    this.getQuadres();
  }

  veureImatge(quadre: any): void {
    this.imatge.url = 'https://www.artic.edu/iiif/2/' + quadre.image_id + '/full/' + this.midaImatges + ',/0/default.jpg';
    this.imatge.alt = quadre.medium_display;
    if (quadre.artist_id) {
      this.apiService.getArtistInfo(quadre.artist_id).subscribe((response: any) => {
        const data = response.data;
        console.log(data);
        this.imatge.nom = data.title ? data.title : 'Desconegut';
        this.imatge.naixament = data.birth_date ? data.birth_date : 'Desconeguda';
        this.imatge.mort = data.death_date ? data.death_date : 'Desconeguda';
      });
    } else {
      this.imatge.nom = 'Desconegut';
      this.imatge.naixament = 'Desconeguda';
      this.imatge.mort = 'Desconeguda';
    }
  }
}
