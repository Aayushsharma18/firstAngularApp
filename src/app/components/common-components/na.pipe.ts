import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  // This is an example of Custom pipe
  // This pipe will return 'NA' if the value is empty, null, or undefined
  // Otherwise, it will return the original value

  transform(value: unknown): unknown {
    if (value == '' || value == null || value == undefined) {
      return 'NA';
    }
    else {
      return value;
    }
  }

}
