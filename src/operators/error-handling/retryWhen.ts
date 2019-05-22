import { of } from 'rxjs';
import { map, retryWhen, scan, takeWhile } from 'rxjs/operators';

export function RetryWhenDemo() {
    of('a', 'b', 1)
        .pipe(
            map((v: string) => v.toUpperCase()),
            retryWhen(err => err
                .pipe(
                    scan(acc => acc + 1, 0),
                    takeWhile(acc => acc < 2)
                )
            )
        ).subscribe(
            d => console.log(`value: ${d}`),
            e => console.log(e),
            () => console.log('complete')
        )
}