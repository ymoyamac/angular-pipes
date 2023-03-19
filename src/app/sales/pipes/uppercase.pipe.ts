import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, isUpperCase: boolean = true, ...args: any[]): string {
    return (isUpperCase) ? value.toUpperCase() : value.toLowerCase();
  }

}
