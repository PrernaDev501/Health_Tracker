import { Injectable } from '@angular/core';
import Chart from 'chart.js/auto';

import { User } from '@/app/components/users/users.model';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private chart: Chart | null = null;

  constructor() {}

  generateColors(count: number) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`);
    }
    return colors;
  }

  createChart(chartRef: HTMLCanvasElement, user: User) {
    const ctx = chartRef.getContext('2d');
    if (ctx) {
      const workoutCount = user.workouts.length;
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: user.workouts.map(w => w.type),
          datasets: [
            {
              label: 'Minutes',
              data: user.workouts.map(w => w.minutes),
              // backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color of bars
              backgroundColor: this.generateColors(workoutCount), // Dynamic colors
              borderColor: this.generateColors(workoutCount).map(color => color.replace('0.2', '1')), // Matching border colors
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }

  updateChart(user: User) {
    if (this.chart) {
      this.chart.data.labels = user.workouts.map((w: any) => w.type);
      this.chart.data.datasets[0].data = user.workouts.map(
        (w: any) => w.minutes
      );
      this.chart.update();
    }
  }
}
