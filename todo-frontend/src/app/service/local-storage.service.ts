import { Injectable } from '@angular/core';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
   private _localStorage: Storage;

   constructor(private _localStorageRefService: LocalStorageRefService) {
      this._localStorage = _localStorageRefService.localStorage
   }
   
}