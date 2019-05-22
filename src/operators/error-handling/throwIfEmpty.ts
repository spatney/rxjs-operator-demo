import { of } from 'rxjs';
import { throwIfEmpty } from 'rxjs/operators';

export function ThrowIfEmptyDemo() {
    of()
    .pipe(throwIfEmpty())
    .subscribe(
        d => console.log(`value: ${d}`),
        e => console.log(e),
        () => console.log('complete')
    )
}