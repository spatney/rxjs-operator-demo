import { of, timer } from 'rxjs';
import { zipAll, take, map } from 'rxjs/operators';

export function ZipAllDemo() {
    const A = timer(0, 500)
        .pipe(
            take(10),
            map(x => `A${x}`)
        );

    const B = timer(0, 1000)
        .pipe(
            take(10),
            map(x => `B${x}`)
        );

    const C = timer(0, 2000)
        .pipe(
            take(10),
            map(x => `C${x}`)
        );

    of(A,B,C)
        .pipe(zipAll())
        .subscribe(
            (d) => console.log(d),
            (e: Error) => console.log(e),
            () => console.log('complete')
        );
}