import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePass'
})
export class TimePassPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
