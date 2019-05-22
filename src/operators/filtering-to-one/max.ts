import { of } from 'rxjs';
import { max } from 'rxjs/operators';

export function MaxDemo() {
    of(1,2,3,4)
    .pipe(
        max()
    ).subscribe(
        (d: number) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}