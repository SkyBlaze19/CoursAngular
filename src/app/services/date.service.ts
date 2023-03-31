import { Injectable } from '@angular/core';
import type { DateTimeFormatOptions } from "intl";

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  modifyDate(createdDate: Date): string {
    const options: DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    const dateLisible = createdDate.toLocaleDateString("fr-FR", options);
    return dateLisible;
  }
}
