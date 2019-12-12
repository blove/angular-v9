import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'swr-person-search-form',
  templateUrl: './person-search-form.component.html',
  styleUrls: ['./person-search-form.component.scss']
})
export class PersonSearchFormComponent implements OnDestroy, OnInit {
  @ViewChild('personForm', { static: true }) personForm: NgForm;

  q: string;

  @Output() qChange = new EventEmitter<string>();

  private unsubscribe = new Subject();

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    this.personForm.valueChanges
      .pipe(pluck('q'), takeUntil(this.unsubscribe))
      .subscribe(value => this.qChange.emit(value));
  }
}
