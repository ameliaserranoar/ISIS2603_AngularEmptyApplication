import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Serie[] = [];
  promedioTemporadas: number = 0;
  serieSeleccionada: Serie | null = null;

  constructor(private serieService: SerieService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.serieService.getBooks().subscribe((series) => {
      this.series = series;
      this.calcularPromedio();
    });
  }

  calcularPromedio(): void {
    const total = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    this.promedioTemporadas = total / this.series.length;
  }

  seleccionarSerie(serie: Serie): void {
    this.serieSeleccionada = serie;
  }
}


