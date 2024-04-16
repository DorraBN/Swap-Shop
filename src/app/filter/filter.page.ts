import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  prix: number = 50; // Prix actuel
  prixMax: number = 100; // Prix maximal

  constructor(private route:Router) { }

  ngOnInit() {
    const controller: HTMLInputElement | null = document.querySelector('input[type=range]');
    const radialProgress: HTMLElement | null = document.querySelector('.RadialProgress');

    if (controller && radialProgress) {
      const setProgress = (progress: number) => {
        const value: string = `${progress}D`;
        radialProgress.style.setProperty('--progress', value);
        radialProgress.innerHTML = value;
        radialProgress.setAttribute('aria-valuenow', value);
      };

      setProgress(this.prix);

      controller.addEventListener('input', () => {
        this.prix = parseInt(controller.value);
        setProgress(this.prix);
      });
    } else {
      console.error('Les éléments HTML n\'ont pas été trouvés.');
    }
  }


  goback(){
    this.route.navigate(['/detail']);
  }
}
