import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export function CatchErrorDemo() {
    of('a', 1)
        .pipe(
            map((v: string) => v.toUpperCase()),
            catchError(_ => of(undefined))
        ).subscribe(
            d => console.log(`value: ${d}`),
            e => console.log(e),
            () => console.log('complete')
        )
}