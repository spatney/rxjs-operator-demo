import { interval } from 'rxjs';
import { take, tap, bufferWhen, window, switchMap, toArray, windowCount } from 'rxjs/operators';

export function WindowCountDemo() {
    interval(100)
        .pipe(
            take(10),
            windowCount(2),
            switchMap(w => w.pipe(toArray()))
        ).subscribe(d => console.log(d))
}