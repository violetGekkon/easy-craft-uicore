import {ApplicationConfig, importProvidersFrom, InjectionToken} from '@angular/core';
import {
  NbSidebarModule,
  NbMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbToastrModule,
  NbThemeModule,
  NbJSThemeOptions,
} from '@nebular/theme';

export const THEME_DEFINITIONS = new InjectionToken<NbJSThemeOptions[]>('THEME_DEFINITIONS');

export function provideUiCore(themes: NbJSThemeOptions[]): ApplicationConfig['providers'] {
  return [
    importProvidersFrom(
      NbThemeModule.forRoot({ name: 'dark' }, themes),
      NbSidebarModule.forRoot(),
      NbMenuModule.forRoot(),
      NbDatepickerModule.forRoot(),
      NbDialogModule.forRoot(),
      NbToastrModule.forRoot()
    ),
    { provide: THEME_DEFINITIONS, useValue: themes }
  ]
}



