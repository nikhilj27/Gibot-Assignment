import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.first.toLowerCase().includes(args.toLowerCase())) || (val.last.toLowerCase().includes(args.toLowerCase())) || (val.email.toLowerCase().includes(args.toLowerCase())) || (val.address.toLowerCase().includes(args.toLowerCase())) || (val.created.toLowerCase().includes(args.toLowerCase())) || (val.balance.toLowerCase().includes(args.toLowerCase()));
      return rVal;
    })

  }

}