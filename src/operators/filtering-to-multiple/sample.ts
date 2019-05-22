import { timer } from 'rxjs';
import { take, filter, sample } from 'rxjs/operators';

export function SampleDemo() {
    timer(0,100).pipe(
        take(10),
        sample(timer(0,200))
    )        
    .subscribe(
        (d) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}