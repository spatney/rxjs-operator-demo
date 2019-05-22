import { of } from 'rxjs';
import { map, catchError, onErrorResumeNext } from 'rxjs/operators';

export function OnErrorResumeNextDemo() {
    of('a', 1, 'b')
        .pipe(
            map((v: string) => v.toUpperCase()),
            onErrorResumeNext(of('x','y'))
        ).subscribe(
            d => console.log(`value: ${d}`),
            e => console.log(e),
            () => console.log('complete')
        )
}