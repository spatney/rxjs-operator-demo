import { of } from 'rxjs';
import { elementAt } from 'rxjs/operators';

export function ElementAtDemo() {
    of(1,2,3,4)
    .pipe(
        elementAt(2)
    ).subscribe(
        (d: number) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}