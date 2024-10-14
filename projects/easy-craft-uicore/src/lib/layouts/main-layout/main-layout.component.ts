import {Component, Input} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {OneColumnLayoutComponent} from "../one-column/one-column.layout";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'ec-main-layout-layout',
  standalone: true,
  imports: [
    OneColumnLayoutComponent,
    NbMenuModule,
    RouterOutlet
  ],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>`,
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  @Input() menu: any[] =[];
}
