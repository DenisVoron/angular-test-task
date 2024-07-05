import { Injectable } from '@angular/core';

const regExpNumber: RegExp = /^[0-9]*$/;
const regExpString: RegExp = /^[a-z]*$/;
const regExpLettersSymbols: RegExp = /^[a-zA-_.+-]+$/;
const regExpLettersDigits: RegExp = /^[A-Za-z0-9]+$/;
const regExpDigitsSymbols: RegExp = /^[z0-9-_.+-]+$/;
const regExpAll: RegExp = /^[a-zA-Z0-9_.+-]+$/;

const statusStringLessEght = 'lesseght';
const statusStringEmpty = 'empty';
const statusStringNumber = 'number';
const statusStringString = 'string';
const statusStringCombination = 'combination';
const statusStringCombinationAll = 'combinationAll';

const eght = 8;
const zerro = 0;

@Injectable({
  providedIn: 'root',
})
export class CheckStringService {
  checkPassword(checkString: string): string {
    if (checkString.length < eght && checkString.length > zerro) {
      return statusStringLessEght;
    } else {
      return this.checkStatusPassword(checkString);
    }
  }

  checkStatusPassword(checkString: string): string {
    if (checkString == '') return statusStringEmpty;
    else if (regExpNumber.test(checkString)) {
      return statusStringNumber;
    } else if (regExpString.test(checkString)) {
      return statusStringString;
    } else if (
      regExpLettersSymbols.test(checkString) ||
      regExpLettersDigits.test(checkString) ||
      regExpDigitsSymbols.test(checkString)
    ) {
      return statusStringCombination;
    } else if (regExpAll.test(checkString)) {
      return statusStringCombinationAll;
    } else return statusStringEmpty;
  }
}
