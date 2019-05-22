import { of } from 'rxjs';
import { map, retry } from 'rxjs/operators';

export function RetryDemo() {
    of('a', 'b', 1)
        .pipe(
            map((v: string) => v.toUpperCase()),
            retry(2)
        ).subscribe(
            d => console.log(`value: ${d}`),
            e => console.log(e),
            () => console.log('complete')
        )
}