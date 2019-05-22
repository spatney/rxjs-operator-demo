import { of } from 'rxjs';
import { findIndex } from 'rxjs/operators';

export function FindIndexDemo() {
    of(1,2,3,4)
    .pipe(
        findIndex(x => x ===3)
    ).subscribe(
        (d: number) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}