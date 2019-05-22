import { of } from 'rxjs';
import { single } from 'rxjs/operators';

export function SingleDemo() {
    of(1, 2, 3, 4)
        .pipe(
            single(x => x > 3)
        ).subscribe(
            (d: number) => console.log(`value: ${d}`),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}