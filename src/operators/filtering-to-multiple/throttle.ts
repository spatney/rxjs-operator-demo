import { timer } from 'rxjs';
import { throttle, take } from 'rxjs/operators';

export function ThrottleDemo() {
    timer(0,100).pipe(
        take(20),
        throttle(x => timer(100 * (x+2)))
    )        
    .subscribe(
        (d) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}