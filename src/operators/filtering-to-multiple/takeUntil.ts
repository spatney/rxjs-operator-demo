import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export function TakeUntilDemo() {
    timer(0, 1000)
        .pipe(
            takeUntil(timer(3000))
        )
        .subscribe(
            (d: number) => console.log(`value: ${d}`),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}