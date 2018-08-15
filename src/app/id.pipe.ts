import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0,2) + "-" + value.slice(2);
  }

}
