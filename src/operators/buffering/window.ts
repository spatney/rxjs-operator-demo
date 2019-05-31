import { interval } from 'rxjs';
import { switchMap, take, toArray, window } from 'rxjs/operators';

export function WindowDemo() {
    interval(100)
        .pipe(
            window(interval(1000)),
            take(3),
            switchMap(w => w.pipe(toArray()))
        ).subscribe(d => console.log(d))
}