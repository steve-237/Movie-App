import { inject, Injectable } from "@angular/core";
import { TranslocoService } from "@jsverse/transloco";

@Injectable({ providedIn: 'root' })
export class LanguageService {
  protected translocoService = inject(TranslocoService);

  setLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}