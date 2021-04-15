import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: any;
  public flipped = false;
  @Output() openedModal: EventEmitter<boolean> = new EventEmitter();
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
    this.openModal();
  }

  public openModal() {
    this.openedModal.emit(true);
  }

  public closeModal() {
    this.openedModal.emit(false);
  }
}
