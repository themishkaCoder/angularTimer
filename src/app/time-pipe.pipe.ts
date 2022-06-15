import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value < 10){
      return `0${value}`
    }
    return `${value}`;
  }

}
