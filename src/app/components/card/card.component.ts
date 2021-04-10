import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: any;
  public flipped = false;
  constructor() {}

  ngOnInit(): void {}

  public flip() {
    this.flipped = !this.flipped;
  }

  public getThumbnail() {
    return `assets/thumbnails/${this.card.thumbnail}`;
  }

  public openVideo(event: any) {
    event.stopPropagation();

    console.log('Open video', this.card);
  }
}
