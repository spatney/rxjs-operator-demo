import { timer } from 'rxjs';
import { skipUntil, take } from 'rxjs/operators';

export function SkipUntilDemo() {
    timer(0, 1000)
        .pipe(
            take(6),
            skipUntil(timer(3000))
        )
        .subscribe(
            (d: number) => console.log(`value: ${d}`),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}