import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { CARDS } from './cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Sant Jordi 2021';
  public currentVideo = '';
  public currentCard = CARDS[0];
  public cards = CARDS;
  public openedModal = false;

  public openModal(card: any) {
    this.currentCard = card;
    const video = card.video[0];
    this.currentVideo = `https://www.youtube.com/embed/${video}`;
    this.openedModal = true;
  }

  public closeModal() {
    this.currentVideo = ';javascript';
    this.openedModal = false;
  }

  public getThumbnail(thumbnail: string) {
    return `assets/thumbnails/${thumbnail}`;
  }

  public selectVideo(index: number) {
    const video = this.currentCard.video[index];
    this.currentVideo = `https://www.youtube.com/embed/${video}`;
  }
}
