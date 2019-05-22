import { timer } from 'rxjs';
import { take, filter } from 'rxjs/operators';

export function FilterDemo() {
    timer(0,100).pipe(
        take(10),
        filter(x => x % 2 === 0)
    )        
    .subscribe(
        (d) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}