import { of } from 'rxjs';
import { repeatWhen, delay, take } from 'rxjs/operators';

export function RepeatWhenDemo() {

    of(1,2)
    .pipe(
        repeatWhen(delay(0)),
        take(12)
    )
    .subscribe(
        (d) => console.log(d),
        (e: Error) => console.log(e),
        () => console.log('complete')
    );
}