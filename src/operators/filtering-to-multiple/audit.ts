import { timer } from 'rxjs';
import { take, audit } from 'rxjs/operators';

export function AuditDemo() {
    timer(0,100).pipe(
        take(20),
        audit(x => timer(100 * (x+2)))
    )        
    .subscribe(
        (d) => console.log(`value: ${d}`),
        (e: Error) => console.log(e),
        () => console.log('complete')
    )
}