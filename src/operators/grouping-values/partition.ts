import { of, partition } from 'rxjs';

/** NOT AN OPERATOR ANYMORE */
interface TimetableEntry {
    day: string;
    status: string;
}

export function PartitionDemo() {
    const timetable: TimetableEntry[] = [
        { day: 'MON', status: 'busy' },
        { day: 'TUES', status: 'free' },
        { day: 'WED', status: 'busy' },
        { day: 'THRS', status: 'free' }
    ];

    const [free, busy] = partition(of(...timetable), v => v.status === 'free');

    free.subscribe(
        (d) => console.log(d),
        (e: Error) => console.log(e),
        () => console.log('complete')
    );
}