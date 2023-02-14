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

  imatgeUrl = '';

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

  veureImatge(url: string): void {
    // Test
  }
}
