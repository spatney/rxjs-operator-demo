import { of } from 'rxjs';
import { finalize } from 'rxjs/operators';

export function FinalizeDemo() {

    of(1, 2, 3, 4, 5)
        .pipe(
            finalize(() => console.log('done'))
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}