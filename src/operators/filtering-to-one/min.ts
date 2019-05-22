import { of } from 'rxjs';
import { min } from 'rxjs/operators';

export function MinDemo() {
    of(1,2,3,4)
    .pipe(
        min()
    ).subscribe(
        (d: number) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}