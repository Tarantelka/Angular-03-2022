import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionSortener'
})
export class DescriptionSortenerPipe implements PipeTransform {

  transform(value: string, wordCount: number): string {
    return value.split(" ").slice(0,wordCount).join(" ");
  }

}
// .split("") - tühjendab Stringi alamstringide massiiviks
// .slice() - teeb ühest massiivist lühema teise massiivi
// .join ("") - teeb massiivist tagasi Stringi

// Elas metsas mutionu, keset kuuski
// split("  "): 
// ["Elas", "metsas","mutionu","keset","kuuski"]
// slice(0,3) esimene nr on kaasaarvatud, teine mitte
// ["Elas", "metsas", "mutionu"]

