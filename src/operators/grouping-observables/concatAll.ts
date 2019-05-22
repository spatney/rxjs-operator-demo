import { of } from 'rxjs';
import { concatAll } from 'rxjs/operators';

export function ConcatAllDemo() {
    of(of(1,2,3), of('a','b','c'))
    .pipe(
        concatAll(),
    ).subscribe(
        (d) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}