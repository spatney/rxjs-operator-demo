import { timer } from 'rxjs';
import { mergeAll, take, tap, windowWhen } from 'rxjs/operators';

export function WindowWhenDemo() {
    timer(0, 100)
        .pipe(
            take(9),
            windowWhen(() => timer(200)),
            tap(() => console.log('new')),
            mergeAll()
        ).subscribe(d => console.log(d))
}