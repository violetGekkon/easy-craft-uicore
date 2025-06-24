import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NbMenuItem, NbMenuModule} from "@nebular/theme";
import {OneColumnLayoutComponent} from "../one-column/one-column.layout";
import {HeaderComponent} from "../../components/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'ec-main-layout',
  standalone: true,
  imports: [
    OneColumnLayoutComponent,
    NbMenuModule,
    RouterOutlet,
    HeaderComponent
  ],
  template: `
    <ngx-one-column-layout>
      <ngx-header (onLogoutClick)="onLogoutClick.emit()" [title]="title"></ngx-header>
      <nb-menu [items]=menu></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>`,
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  @Output() onLogoutClick = new EventEmitter();
  @Input() menu: NbMenuItem[] = [];
  @Input() title: string = 'ec-admin';
}
