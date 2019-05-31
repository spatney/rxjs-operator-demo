import { of, interval } from 'rxjs';
import { concatMap, concatMapTo, take } from 'rxjs/operators';

export function ConcatMapToDemo() {
    console.log('starting ...');

    interval(500)
        .pipe(
            take(5),
            concatMapTo(of('a', 'b'))
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}