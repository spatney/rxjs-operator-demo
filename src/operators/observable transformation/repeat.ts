import { of } from 'rxjs';
import { toArray, repeat } from 'rxjs/operators';

export function RepeatDemo() {

    of(1,2)
    .pipe(
        repeat(3)
    )
    .subscribe(
        (d) => console.log(d),
        (e: Error) => console.log(e),
        () => console.log('complete')
    );
}