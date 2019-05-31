import { asapScheduler, asyncScheduler, of } from 'rxjs';
import { subscribeOn, tap } from 'rxjs/operators';

export function SubscribeOnDemo() {

    of('asap')
        .pipe(
            tap(x => console.log(`${x} queued`)),
            subscribeOn(asapScheduler)
        )
        .subscribe(
            (d) => console.log(`${d} emitted`),
            (e: Error) => console.log(e),
            () => console.log('asap complete')
        );

    of('async')
        .pipe(
            tap(x => console.log(`${x} queued`)),
            subscribeOn(asyncScheduler)
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
            () => console.log('immediate complete')
        );

    console.log('function end');

}