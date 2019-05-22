import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

export function TakeWhileDemo() {
    of(1, 2, 3, 4, 5, 6, 7, 0)
        .pipe(
            takeWhile(x => x < 4)
        )
        .subscribe(
            (d: number) => console.log(`value: ${d}`),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}