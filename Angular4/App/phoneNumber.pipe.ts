import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone'
})

export class PhoneNumberPipe implements PipeTransform {
    transform(allNumbers: string): string {
        let readyNumbers: Array<string> = new Array<string>();
        let numbers = allNumbers.split(' ');
        for (let n in numbers) {
            let onlyDigits = numbers[n].replace(/\D/g, '');
            let dividedIntoThreePartsNumber = onlyDigits.match(/^(\d{3})(\d{3})(\d{4})$/);
            readyNumbers.push((dividedIntoThreePartsNumber) ? "(" + dividedIntoThreePartsNumber[1] + ") " + dividedIntoThreePartsNumber[2] + "-" + dividedIntoThreePartsNumber[3] : "");
        }
        return readyNumbers.join('; ');
    }
};