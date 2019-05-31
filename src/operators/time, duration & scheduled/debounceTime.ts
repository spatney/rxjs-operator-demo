import { timer } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';

export function DebounceTimeDemo() {

    timer(0, 100)
        .pipe(
            take(10),
            debounceTime(200)
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}