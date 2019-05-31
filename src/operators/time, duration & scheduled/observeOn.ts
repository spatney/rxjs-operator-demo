import { timer, of, asapScheduler, asyncScheduler } from 'rxjs';
import { observeOn, tap } from 'rxjs/operators';

export function ObserveOnDemo() {

    of('asap')
        .pipe(
            tap(x => console.log(`${x} queued`)),
            observeOn(asapScheduler)
        )
        .subscribe(
            (d) => console.log(`${d} emitted`),
            (e: Error) => console.log(e),
            () => console.log('asap complete')
        );


    of('async')
        .pipe(
            tap(x => console.log(`${x} queued`)),
            observeOn(asyncScheduler)
        )
        .subscribe(
            (d) => console.log(`${d} emitted`),
            (e: Error) => console.log(e),
            () => console.log('async complete')
        );

    of('immediate')
        .pipe(
            tap(x => console.log(`${x} queued`))
        )
        .subscribe(
            (d) => console.log(`${d} emitted`),
            (e: Error) => console.log(e),
            () => console.log('immidiate complete')
        );

}