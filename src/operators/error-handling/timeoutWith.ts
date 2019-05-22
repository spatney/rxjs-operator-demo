import { Observable, Observer, of } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';

export function TimeoutWithDemo() {
    Observable.create((obv: Observer<string>) => {
        obv.next('A');
        setTimeout(() => obv.next('B'), 100);
        setTimeout(() => obv.next('C'), 300);
        setTimeout(() => obv.complete(), 600);
    })
    .pipe(
        timeoutWith(
            150,
            of('x', 'y', 'z')
        )
    ).subscribe(
        (d: string) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}