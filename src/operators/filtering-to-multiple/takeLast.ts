import { of } from 'rxjs';
import { takeLast } from 'rxjs/operators';

export function TakeLastDemo() {
    of('a','b','c')
    .pipe(
        takeLast(2)
    ).subscribe(
        (d: string) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}