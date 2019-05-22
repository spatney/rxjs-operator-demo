import { timer } from 'rxjs';
import { take, switchMap, toArray, windowToggle } from 'rxjs/operators';

export function WindowToggleDemo() {
    timer(0,100)
        .pipe(
            take(36),
            windowToggle(
                timer(0, 500),
                () => timer(200)
            ),
            switchMap(w => w.pipe(toArray()))
        ).subscribe(d => console.log(d))
}