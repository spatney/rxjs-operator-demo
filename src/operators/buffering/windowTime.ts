import { interval } from 'rxjs';
import { take, switchMap, toArray, windowTime } from 'rxjs/operators';

export function WindowTimeDemo() {
    interval(100)
        .pipe(
            take(10),
            windowTime(200),
            switchMap(w => w.pipe(toArray()))
        ).subscribe(d => console.log(d))
}