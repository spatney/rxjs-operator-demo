import {
    Observable,
    from
} from 'rxjs';

const o = from([1, 2, 3, 4, 5]);

o.subscribe(d => console.log(`got ${d}`));