import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

export function ConcatMapDemo() {
    console.log('starting ...');

    of(1,2,3,4,5)
        .pipe(
            concatMap(d => [d, d * 10])
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}