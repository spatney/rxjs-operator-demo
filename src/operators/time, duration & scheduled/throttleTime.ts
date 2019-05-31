import { timer } from 'rxjs';
import { take, throttleTime } from 'rxjs/operators';

export function ThrottleTimeDemo() {
    console.log('starting ...');

    timer(0,10)
        .pipe(
            take(300),
            throttleTime(1000)
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}