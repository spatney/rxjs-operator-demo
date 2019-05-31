import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function DelayDemo() {
    console.log('starting ...');

    of(1,2,3,4,5)
        .pipe(
            delay(1000)
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}