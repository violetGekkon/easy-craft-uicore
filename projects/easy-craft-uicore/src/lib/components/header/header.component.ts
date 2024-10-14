import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbIconModule,
  NbSearchModule, NbSelectModule, NbSidebarService, NbThemeService,
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
export class HeaderComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  currentTheme = 'default';
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  @Output() navigateHome = new EventEmitter();

  constructor(private _themeService: NbThemeService,
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

  changeTheme(themeName: string) {
    this._themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this._sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
}
