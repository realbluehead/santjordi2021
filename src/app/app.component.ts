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
