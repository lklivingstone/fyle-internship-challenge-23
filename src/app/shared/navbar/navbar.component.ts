import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private router: Router
    ) { }

  searchQuery: string = '';
  isInputError: boolean = false;
  inputErrorMessage: string = '';

  onSubmit(event: Event) {
    if (this.searchQuery.trim() === '') {
      this.isInputError = true;
      this.inputErrorMessage = 'Username cannot be empty.';
      return;
    }

    if (this.searchQuery.trim().includes(' ')) {
      this.isInputError = true;
      this.inputErrorMessage = 'Username contains space.';
      return;
    }

    this.isInputError = false;
    this.inputErrorMessage = '';
    this.router.navigate(['/user', this.searchQuery], {
      queryParams: { page: 1, per_page: 10 },
    });
  }
}
