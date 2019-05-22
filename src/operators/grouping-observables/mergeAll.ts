import { of, timer } from 'rxjs';
import { mergeAll, take, delay } from 'rxjs/operators';

export function MergeAllDemo() {
    of(timer(0,1), of('a','b','c').pipe(delay(20)))
    .pipe(
        mergeAll(),
        take(20)
    ).subscribe(
        (d) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}