import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSeperator'
})
export class ThousandSeperatorPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString("uk", {minimumFractionDigits: 2, maximumFractionDigits: 2}).replace(",",".") + "€";
  }

}
