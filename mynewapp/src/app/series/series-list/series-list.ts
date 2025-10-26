import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.html',
  styleUrl: './series-list.css',
})

export class SeriesList implements OnInit {
  series: Series[] = [];
  selectedSeries?: Series;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(
      (data: Series[]) => {
        this.series = data || [];
        if (this.series.length > 0) {
          this.selectedSeries = this.series[0];
        }
      },
      (err) => {
        console.error('Error cargando series:', err);
      }
    );
  }

  selectSeries(s: Series): void {
    this.selectedSeries = s;
  }

  trackById(index: number, item: Series): number {
    return item.id;
  }

  get averageSeasons(): number {
    if (!this.series || this.series.length === 0) {
      return 0;
    }
    const total = this.series.reduce((acc, s) => acc + (Number(s.seasons) || 0), 0);
    return total / this.series.length;
  }
}
