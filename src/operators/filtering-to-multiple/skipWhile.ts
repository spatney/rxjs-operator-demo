import { of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

export function SkipWhileDemo() {
    of(1, 2, 3, 4, 5, 6, 7, 0)
        .pipe(
            skipWhile(x => x < 4)
        )
        .subscribe(
            (d: number) => console.log(`value: ${d}`),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}