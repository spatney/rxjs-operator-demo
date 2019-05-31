import { interval } from 'rxjs';
import { switchMap, take, toArray, windowCount } from 'rxjs/operators';

export function WindowCountDemo() {
    interval(100)
        .pipe(
            take(10),
            windowCount(2),
            switchMap(w => w.pipe(toArray()))
        ).subscribe(d => console.log(d))
}