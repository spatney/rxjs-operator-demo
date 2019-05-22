import { of } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

export function DistinctUntilKeyChangedDemo() {
    of({name: 'paul'},{name: 'paul'},{name: 'sam'},{name: 'paul'})
        .pipe(
            distinctUntilKeyChanged('name')
        )
        .subscribe(
            (d) => console.log(`value: ${d.name}`),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}