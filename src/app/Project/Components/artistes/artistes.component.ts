import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.scss']
})
export class ArtistesComponent implements OnInit {

  quadres = Array<any>();

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getQuadres();
  }

  getQuadres(): void {
    this.apiService.getQuadres(12, 1).subscribe((data: any) => {
      console.log(data);
      this.quadres = data.data;
      this.getArtistes(this.quadres);
    });
  }

  getArtistes(quadres: Array<any>): void {
    quadres.forEach(quadre => {
      quadre.artista = {
        nom: '',
        naixament: '',
        mort: ''
      };

      if (quadre.artist_id) {
        this.apiService.getArtistInfo(quadre.artist_id).subscribe((response: any) => {
          const data = response.data;
          quadre.artista.nom = data.title ? data.title : 'Desconegut';
          quadre.artista.naixament = data.birth_date ? data.birth_date : 'Desconeguda';
          quadre.artista.mort = data.death_date ? data.death_date : 'Desconeguda';
        });
      } else {
        quadre.artista.nom = 'Desconegut';
        quadre.artista.naixament = 'Desconeguda';
        quadre.artista.mort = 'Desconeguda';
      }
    });
  }
}
