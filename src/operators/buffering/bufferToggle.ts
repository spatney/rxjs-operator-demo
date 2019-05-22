import { interval } from 'rxjs';
import { take, tap, bufferToggle } from 'rxjs/operators';

export function BufferToggleDemo() {

    const open = interval(600).pipe(tap(() => console.log('open')));
    const close = () => interval(300).pipe(tap(() => console.log('close')));

    interval(100)
        .pipe(
            tap(x => console.log(x)),
            bufferToggle(open, close),
            take(3)
        )
        .subscribe(d => console.log(d));

}