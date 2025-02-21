import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  private languageService = inject(LanguageService);

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }

}
