import { of, timer } from 'rxjs';
import { auditTime, take } from 'rxjs/operators';

export function AuditTimeDemo() {

    timer(0,500)
        .pipe(
            take(10),
            auditTime(1000)
        )
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}