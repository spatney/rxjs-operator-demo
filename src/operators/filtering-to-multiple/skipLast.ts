import { of } from 'rxjs';
import { skipLast } from 'rxjs/operators';

export function SkipLastDemo() {
    of('a','b','c')
    .pipe(
        skipLast(2)
    ).subscribe(
        (d: string) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}