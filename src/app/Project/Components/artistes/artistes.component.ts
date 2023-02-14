import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.scss']
})
export class ArtistesComponent implements OnInit {

  quadres = Array<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
