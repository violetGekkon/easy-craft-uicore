import { Injectable, inject } from '@angular/core';
import {NbJSThemeOptions, NbThemeService} from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';
import {THEME_DEFINITIONS} from "../ui-core.config";

@Injectable({
  providedIn: 'root'
})
export class EcThemeService {
  private themes: NbJSThemeOptions[];
  private nbThemeService = inject(NbThemeService);
  private currentThemeSubject = new BehaviorSubject<string>(this.nbThemeService.currentTheme);

  constructor() {
    this.themes = inject(THEME_DEFINITIONS);
  }

  getCurrentTheme(): string {
    return this.currentThemeSubject.getValue();
  }

  onThemeChange(): Observable<string> {
    return this.currentThemeSubject.asObservable();
  }

  changeTheme(themeName: string) {
    if (this.themes.some(theme => theme.name === themeName)) {
      this.nbThemeService.changeTheme(themeName);
      this.currentThemeSubject.next(themeName);
    } else {
      console.error(`Theme "${themeName}" not found`);
    }
  }

  getThemes() {
    return this.themes.map(theme => ({ value: theme.name, name: theme.name }));
  }
}
