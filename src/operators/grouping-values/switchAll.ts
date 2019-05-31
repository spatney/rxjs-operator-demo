import { of, Subject } from 'rxjs';
import { tap, endWith, delay, switchAll } from 'rxjs/operators';

export function SwitchAllDemo() {
    const origin = new Subject();
    const A = of('A1','A2','A3','A4').pipe(
        tap(x => x === 'A1' ? console.log('Begin A'): ''),
        endWith('end of A')
    )

    const B = of('B1','B2').pipe(
        tap(x => x === 'B1' ? console.log('Begin B'): ''),
        delay(100),
        endWith('end of B')
    )

    const C = of('C1','C2','C3').pipe(
        tap(x => x === 'C1' ? console.log('Begin C'): ''),
        endWith('end of C')
    )

    origin.pipe(switchAll()).subscribe(console.log);

    origin.next(A);
    setTimeout(() => origin.next(B), 1000);
    setTimeout(() => origin.next(C), 1000);
}