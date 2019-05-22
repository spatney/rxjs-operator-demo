import { interval } from 'rxjs';
import { take, tap, bufferWhen } from 'rxjs/operators';

export function BufferWhenDemo() {

    let x = 0;
    interval(500)
        .pipe(
            take(10),
            tap(i => x = i),
            bufferWhen(() => {
                if (x < 5) {
                    return interval(1000)
                }
                return interval(500)
            })
        )
        .subscribe(d => console.log(d));

}