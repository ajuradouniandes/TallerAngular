import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './data';
import { SeriesService } from './series.service';

@Component({
  standalone: false,
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  avaregeSeasons: number = 0;
  constructor(private SeriesService: SeriesService ) { }
  
  async getSeries() {
      await this.SeriesService.getSeries().subscribe((data: Array<Serie>) => {
        this.series = data;
        this.getAvaregeSeasons();
      }
    );
  }

  getAvaregeSeasons() {
    for (let serie of this.series) {
      this.avaregeSeasons += serie.season;
    }
    this.avaregeSeasons = this.avaregeSeasons / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}
