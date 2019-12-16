import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swr-stormtroopers',
  templateUrl: './stormtroopers.component.html',
  styleUrls: ['./stormtroopers.component.scss']
})
export class StormtroopersComponent {
  classes: string[] = [];

  private rotate = false;

  onRotate() {
    this.rotate = !this.rotate;
    if (this.rotate) {
      this.classes = [...this.classes, 'rotate'];
    } else {
      this.classes = [...this.classes].filter(c => c !== 'rotate');
    }
  }
}
