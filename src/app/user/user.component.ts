import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { type User } from './user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    standalone: true,
    imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
