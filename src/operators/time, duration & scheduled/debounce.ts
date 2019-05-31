import { interval, timer } from 'rxjs';
import { debounce, take } from 'rxjs/operators';

export function DebounceDemo() {

    timer(0, 100)
        .pipe(
            take(10),
            debounce(() => interval(200))
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}