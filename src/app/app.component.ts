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
    thumbnail: 'i5.png',
    video: 'i4',
  },
  {
    title: 'I5',
    thumbnail: 'i5.png',
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
    thumbnail: 'p3.png',
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
    title: 'E1',
    thumbnail: 'p6.png',
    video: 'p6',
  },
  {
    title: 'E2',
    thumbnail: 'p6.png',
    video: 'p6',
  },
  {
    title: 'E3',
    thumbnail: 'p6.png',
    video: 'p6',
  },
  {
    title: 'E4',
    thumbnail: 'p6.png',
    video: 'p6',
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
}
