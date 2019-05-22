import { of } from 'rxjs';
import { take } from 'rxjs/operators';

export function TakeDemo() {
    of('a','b','c')
    .pipe(
        take(2)
    ).subscribe(
        (d: string) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}