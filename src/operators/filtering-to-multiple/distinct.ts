import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

export function DistinctDemo() {
    of(1, 1, 2, 2, 3, 4, 5, 5)
        .pipe(
            distinct()
        )
        .subscribe(
            (d: number) => console.log(`value: ${d}`),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}