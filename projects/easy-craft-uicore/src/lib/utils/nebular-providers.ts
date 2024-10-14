import { NbThemeModule } from '@nebular/theme';
import {importProvidersFrom} from "@angular/core";

export const nebularProviders = [
  importProvidersFrom(NbThemeModule.forRoot({ name: 'default' })),
];
