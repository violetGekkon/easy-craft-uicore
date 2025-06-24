import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbIconModule,
  NbMenuService,
  NbSearchModule,
  NbSelectModule,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {map, Subject, takeUntil} from "rxjs";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'ngx-header',
  standalone: true,
  imports: [
    NbEvaIconsModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbSearchModule,
    NbSelectModule,
    NgForOf
  ],
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  currentTheme = 'default';
  @Input() title: string = 'ec-admin';
  @Output() onLogoutClick = new EventEmitter();

  constructor(private _themeService: NbThemeService,
              private _menuService: NbMenuService,
              private _sidebarService: NbSidebarService) {
  }

  ngOnInit() {
    this.currentTheme = this._themeService.currentTheme;
    this._themeService.onThemeChange()
      .pipe(
        map(({name}) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigateHome() {
    this._menuService.navigateHome();
    return false;
  }

  changeTheme() {
    const themeName = this.currentTheme === 'dark' ? 'default' : 'dark';
    this._themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this._sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
}
