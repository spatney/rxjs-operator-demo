import { of } from 'rxjs';
import { exhaust, delay } from 'rxjs/operators';

export function ExhaustDemo() {
    of(of(1,2,3).pipe(delay(100)), of('a','b','c'))
    .pipe(
        exhaust(),
    ).subscribe(
        (d) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}