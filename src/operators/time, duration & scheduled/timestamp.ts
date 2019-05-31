import { of, Observable, Observer } from 'rxjs';
import { delay, timeInterval, timestamp } from 'rxjs/operators';

export function TimeStampDemo() {
    console.log('starting ...');

    const source = Observable.create((ob: Observer<String>) => {
        setTimeout(() => ob.next('A'), 100);
        setTimeout(() => ob.next('B'), 300);
        setTimeout(() => ob.next('C'), 600);
    });

    source
        .pipe(
            timestamp()
        )
        .subscribe(
            (d: string) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}