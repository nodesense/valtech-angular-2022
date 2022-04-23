import { Pipe, PipeTransform } from '@angular/core';

// Two types of pipes

// 1. Pure pipe [default pure: true]
//     transform function is called ONLY if any of the parameter passed to transform is different than previous call
//     Good for performance
//     works with immutable data , data is created, not mutated in same object
// 2. Impure Pipe (pure = false)
//     transform function called on every change detection , almost every event, it won't check whether parameters are changed or not
//    bad performance
//     not good for production, may useful for simple, smaller data set

@Pipe({
  name: 'sort',
  pure: true // default 
  // pure: false // impure pipe
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
