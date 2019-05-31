import { of } from 'rxjs';
import { pairwise } from 'rxjs/operators';

export function PairwiseDemo() {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        .pipe(
            pairwise()
        ).subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}