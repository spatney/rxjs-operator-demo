import { Observable, Observer } from 'rxjs';
import { timeout } from 'rxjs/operators';

export function TimeoutDemo() {
    const source = Observable.create((obv: Observer<string>) => {
        obv.next('A');
        setTimeout(() => obv.next('B'), 100);
        setTimeout(() => obv.next('C'), 300);
        setTimeout(() => obv.complete(), 600);
    })

    source
        .pipe(
            timeout(200),
        ).subscribe(
            (d: string) => console.log(`value: ${d}`),
            (e: Error) => console.log(e),
            () => console.log('complete')
        )
}