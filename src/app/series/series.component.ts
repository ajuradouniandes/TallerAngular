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
  constructor(private SeriesService: SeriesService ) { }
  
  getSeries() {
      this.SeriesService.getSeries().subscribe((data: Array<Serie>) => {
        this.series = data;
      }
    );
  }

  ngOnInit() {
    this.getSeries();
  }

}
