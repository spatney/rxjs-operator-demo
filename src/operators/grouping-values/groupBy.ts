import { of } from 'rxjs';
import { exhaust, delay, groupBy, mergeMap, toArray } from 'rxjs/operators';

export function GroupByDemo() {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        .pipe(
            groupBy(x => x % 2 === 0),
            mergeMap(group$ => group$.pipe(toArray()))
        ).subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}