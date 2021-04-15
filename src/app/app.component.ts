import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';

const CARDS = [
  {
    title: 'I3',
    thumbnail: 'i3.png',
    video: 'i3',
  },
  {
    title: 'I4',
    thumbnail: 'i4.png',
    video: 'i4',
  },
  {
    title: 'I5',
    thumbnail: 'i5-1.png',
    video: 'i5',
  },
  {
    title: 'P1',
    thumbnail: 'p1.png',
    video: 'p1',
  },
  {
    title: 'P2',
    thumbnail: 'p2.png',
    video: 'p2',
  },
  {
    title: 'P3',
    thumbnail: 'p3-1.png',
    video: 'p3',
  },
  {
    title: 'P4',
    thumbnail: 'p4.png',
    video: 'p4',
  },
  {
    title: 'P5',
    thumbnail: 'p5.png',
    video: 'p5',
  },
  {
    title: 'P6',
    thumbnail: 'p6.png',
    video: 'p6',
  },
  {
    title: 'ESO1',
    thumbnail: 'eso1.png',
    video: 'eso1',
  },
  {
    title: 'ESO2',
    thumbnail: 'eso2.png',
    video: 'eso2',
  },
  {
    title: 'ESO3',
    thumbnail: 'eso3.png',
    video: 'eso3',
  },
  {
    title: 'ESO4',
    thumbnail: 'eso4.png',
    video: 'eso4',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Sant Jordi 2021';
  public cards = CARDS;
  public openedModal = false;

  public openModal(card: any) {
    console.log(card);
    this.openedModal = true;
  }

  public closeModal() {
    this.openedModal = false;
  }
}
