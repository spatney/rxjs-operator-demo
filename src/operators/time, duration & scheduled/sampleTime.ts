import { timer } from 'rxjs';
import { sampleTime, take } from 'rxjs/operators';

export function SampleTimeDemo() {

    timer(0, 500)
        .pipe(
            take(10),
            sampleTime(1000)
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}