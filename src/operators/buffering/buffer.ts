import { interval } from 'rxjs';
import { buffer, take } from 'rxjs/operators';

export function BufferDemo() {
    const array = [1, 2, 3, 4, 5, 6];

    interval(100)
        .pipe(
            buffer(interval(1000)),
            take(3)
        )
        .subscribe(d => console.log(d));

}