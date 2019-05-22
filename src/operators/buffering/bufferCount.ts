import { of } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

export function BufferCountDemo() {
    console.log('Buffer Count Demo');

    of(1,2,3)
    .pipe(
        bufferCount(2, 1)
    )
    .subscribe(d => console.log(d));
}