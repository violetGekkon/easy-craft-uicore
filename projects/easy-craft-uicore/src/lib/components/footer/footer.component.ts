import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  template: `
    <span class="created-by">
      Created with ♥ by <b>Easy-craft</b> 2024
    </span>
  `,
})
export class FooterComponent {
}
