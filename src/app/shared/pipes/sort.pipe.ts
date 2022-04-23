import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  // items can be any array of objects, cities, orders, sales, items etc...
  // propertyName is an attribute in object, name, cityName, etc
  // sortType : asc , desc
  transform(items: any[], propertyName: string, sortType: string = 'asc'): any[] {
    console.log("Pipe is called ", items, propertyName, sortType)

    if (!items || !propertyName) {
      return items;
    }

    if (sortType == 'desc') {
          return items.sort ( (leftItem, rightItem) => {
            if (leftItem[propertyName] < rightItem[propertyName])
              return 1;

            return -1
      })
    }

    // asc order
   
    return items.sort ( (leftItem, rightItem) => {
      if (leftItem[propertyName] < rightItem[propertyName])
        return -1;

      return 1
    })

  
    


  }

}
