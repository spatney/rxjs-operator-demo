import { of } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

export function DefaultIfEmptyDemo() {
    console.log('starting ...');

    of()
        .pipe(
            defaultIfEmpty('nothing happened')
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}