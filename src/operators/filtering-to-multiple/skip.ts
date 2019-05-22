import { of } from 'rxjs';
import { skip } from 'rxjs/operators';

export function SkipDemo() {
    of('a','b','c')
    .pipe(
        skip(2)
    ).subscribe(
        (d: string) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}