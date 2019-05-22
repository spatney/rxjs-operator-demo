import { of } from 'rxjs';
import { last } from 'rxjs/operators';

export function LastDemo() {
    of('a','b','c')
    .pipe(
        last()
    ).subscribe(
        (d: string) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}