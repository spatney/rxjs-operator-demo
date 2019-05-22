import { of, timer } from 'rxjs';
import { combineAll, take } from 'rxjs/operators';

export function CombineAllDemo() {
    of(timer(0,100), timer(0,150))
    .pipe(
        combineAll(),
        take(10)
    ).subscribe(
        (d) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}