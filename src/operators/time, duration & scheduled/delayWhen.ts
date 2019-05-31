import { interval, of } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

export function DelayWhenDemo() {
    console.log('starting ...');

    of(1,2,3,4,5)
        .pipe(
            delayWhen((x) => interval(x * 1000))
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}