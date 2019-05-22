import { of, timer } from 'rxjs';
import { withLatestFrom, take, map, delay} from 'rxjs/operators';

export function WithLatestFromDemo() {
    const source = timer(0, 300).pipe(
        take(3),
        map((i => `A${i}`))
    );

    const internal1 = timer(0, 350).pipe(
        take(10),
        map((i => `B${i}`))
    );

    const internal2 = of('C').pipe(delay(10));

    source
    .pipe(
        withLatestFrom(internal1, internal2),
    ).subscribe(
        (d) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}