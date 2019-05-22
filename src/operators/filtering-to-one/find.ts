import { of } from 'rxjs';
import { find } from 'rxjs/operators';

export function FindDemo() {
    of(1,2,3,4)
    .pipe(
        find(x => x ===3)
    ).subscribe(
        (d: number) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}