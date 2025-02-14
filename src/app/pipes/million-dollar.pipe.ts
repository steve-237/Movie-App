import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar'
})
export class MillionDollarPipe implements PipeTransform {

  transform(budget: string): string {
    if(!budget) return '';
    let result = budget;
    let split = budget.split("-");
    if(split.length > 1) {
       result = split[0] + ' to $' + split[1];
    } 
    return `$${ result } million`;
    
  }

}
