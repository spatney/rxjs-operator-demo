import { of, partition } from 'rxjs';
import { toArray } from 'rxjs/operators';

export function ToArrayDemo() {

    of(1,2,3,4,5,6)
    .pipe(
        toArray()
    )
    .subscribe(
        (d) => console.log(d),
        (e: Error) => console.log(e),
        () => console.log('complete')
    );
}