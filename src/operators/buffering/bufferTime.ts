import { interval } from 'rxjs';
import { take, bufferTime } from 'rxjs/operators';

export function BufferTimeDemo() {
    console.log('buffer time demo');

    interval(1000)
        .pipe(
            take(6),
            bufferTime(2000, 1000)
        ).subscribe(d => console.log(d));
}