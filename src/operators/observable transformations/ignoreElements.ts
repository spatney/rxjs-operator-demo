import { of } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';

export function IgnoreElementsDemo() {

    of(1,2,3,4,5)
    .pipe(
        ignoreElements()
    )
    .subscribe(
        (d) => console.log(d),
        (e: Error) => console.log(e),
        () => console.log('complete')
    );
}