import { of } from 'rxjs';
import { first } from 'rxjs/operators';

export function FirstDemo() {
    of('a','b','c')
    .pipe(
        first()
    ).subscribe(
        (d: string) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}