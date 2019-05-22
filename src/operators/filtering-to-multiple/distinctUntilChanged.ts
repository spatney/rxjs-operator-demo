import { of } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

export function DistinctUntilChangedDemo() {
    of(1, 1, 2, 2, 3, 4, 5, 3, 5)
        .pipe(
            distinctUntilChanged()
        )
        .subscribe(
            (d: number) => console.log(`value: ${d}`),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}