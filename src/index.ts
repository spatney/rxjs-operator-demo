import { of, Subject } from "rxjs";
import { filter, last, repeatWhen } from "rxjs/operators";
import { BufferDemo } from "./operators/buffering/buffer";
import { BufferCountDemo } from "./operators/buffering/bufferCount";
import { BufferTimeDemo } from "./operators/buffering/bufferTime";
import { BufferToggleDemo } from "./operators/buffering/bufferToggle";
import { BufferWhenDemo } from "./operators/buffering/bufferWhen";
import { WindowDemo } from "./operators/buffering/window";
import { WindowCountDemo } from "./operators/buffering/windowCount";
import { WindowTimeDemo } from "./operators/buffering/windowTime";
import { WindowToggleDemo } from "./operators/buffering/windowToggle";
import { WindowWhenDemo } from "./operators/buffering/windowWhen";
import { CatchErrorDemo } from "./operators/error-handling/catchError";
import { OnErrorResumeNextDemo } from "./operators/error-handling/onErrorResumeNext";
import { RetryDemo } from "./operators/error-handling/retry";
import { RetryWhenDemo } from "./operators/error-handling/retryWhen";
import { ThrowIfEmptyDemo } from "./operators/error-handling/throwIfEmpty";
import { TimeoutDemo } from "./operators/error-handling/timeout";
import { TimeoutWithDemo } from "./operators/error-handling/timeoutWith";
import { AuditDemo } from "./operators/filtering-to-multiple/audit";
import { DistinctDemo } from "./operators/filtering-to-multiple/distinct";
import { DistinctUntilChangedDemo } from "./operators/filtering-to-multiple/distinctUntilChanged";
import { DistinctUntilKeyChangedDemo } from "./operators/filtering-to-multiple/distinctUntilKeyChanged";
import { FilterDemo } from "./operators/filtering-to-multiple/filter";
import { SampleDemo } from "./operators/filtering-to-multiple/sample";
import { SkipDemo } from "./operators/filtering-to-multiple/skip";
import { SkipLastDemo } from "./operators/filtering-to-multiple/skipLast";
import { SkipUntilDemo } from "./operators/filtering-to-multiple/skipUntil";
import { SkipWhileDemo } from "./operators/filtering-to-multiple/skipWhile";
import { TakeDemo } from "./operators/filtering-to-multiple/take";
import { TakeLastDemo } from "./operators/filtering-to-multiple/takeLast";
import { TakeUntilDemo } from "./operators/filtering-to-multiple/takeUntil";
import { TakeWhileDemo } from "./operators/filtering-to-multiple/takeWhile";
import { ThrottleDemo } from "./operators/filtering-to-multiple/throttle";
import { ElementAtDemo } from "./operators/filtering-to-one/elementAt";
import { FindDemo } from "./operators/filtering-to-one/find";
import { FindIndexDemo } from "./operators/filtering-to-one/findIndex";
import { FirstDemo } from "./operators/filtering-to-one/first";
import { LastDemo } from "./operators/filtering-to-one/last";
import { MaxDemo } from "./operators/filtering-to-one/max";
import { MinDemo } from "./operators/filtering-to-one/min";
import { SingleDemo } from "./operators/filtering-to-one/single";
import { CombineAllDemo } from "./operators/grouping-observables/combineAll";
import { ConcatAllDemo } from "./operators/grouping-observables/concatAll";
import { ExhaustDemo } from "./operators/grouping-observables/exhaust";
import { MergeAllDemo } from "./operators/grouping-observables/mergeAll";
import { WithLatestFromDemo } from "./operators/grouping-observables/withLastestFrom";
import { GroupByDemo } from "./operators/grouping-values/groupBy";
import { PairwiseDemo } from "./operators/grouping-values/pairwise";
import { PartitionDemo } from "./operators/grouping-values/partition";
import { SwitchAllDemo } from "./operators/grouping-values/switchAll";
import { ToArrayDemo } from "./operators/grouping-values/toArray";
import { ZipAllDemo } from "./operators/grouping-values/zipAll";
import { FinalizeDemo } from "./operators/observable transformation/finalize";
import { IgnoreElementsDemo } from "./operators/observable transformation/ignoreElements";
import { RepeatDemo } from "./operators/observable transformation/repeat";
import { RepeatWhenDemo } from "./operators/observable transformation/repeatWhen";
import { AuditTimeDemo } from "./operators/time, duration & scheduled/auditTime";
import { ObserveOnDemo } from "./operators/time, duration & scheduled/observeOn";
import { SampleTimeDemo } from "./operators/time, duration & scheduled/sampleTime";
import { SubscribeOnDemo } from "./operators/time, duration & scheduled/subscribeOn";

const demos = [];

demos.push(BufferDemo);
demos.push(BufferCountDemo);
demos.push(BufferTimeDemo);
demos.push(DistinctUntilKeyChangedDemo);
demos.push(DistinctUntilChangedDemo);
demos.push(OnErrorResumeNextDemo);
demos.push(BufferToggleDemo);
demos.push(BufferWhenDemo);
demos.push(WindowDemo);
demos.push(WindowCountDemo);
demos.push(WindowTimeDemo);
demos.push(WindowToggleDemo);
demos.push(WindowWhenDemo);
demos.push(CatchErrorDemo);
demos.push(ThrowIfEmptyDemo);
demos.push(RetryDemo);
demos.push(RetryWhenDemo);
demos.push(TimeoutDemo);
demos.push(TimeoutWithDemo);
demos.push(SkipDemo);
demos.push(SkipLastDemo);
demos.push(SkipUntilDemo);
demos.push(SkipWhileDemo);
demos.push(TakeDemo);
demos.push(TakeLastDemo);
demos.push(TakeUntilDemo);
demos.push(TakeWhileDemo);
demos.push(DistinctDemo);
demos.push(FilterDemo);
demos.push(SampleDemo);
demos.push(AuditDemo);
demos.push(ThrottleDemo);
demos.push(FirstDemo);
demos.push(LastDemo);
demos.push(MinDemo);
demos.push(MaxDemo);
demos.push(ElementAtDemo);
demos.push(FindDemo);
demos.push(FindIndexDemo);
demos.push(SingleDemo);
demos.push(CombineAllDemo);
demos.push(ConcatAllDemo);
demos.push(ExhaustDemo);
demos.push(MergeAllDemo);
demos.push(WithLatestFromDemo);
demos.push(GroupByDemo);
demos.push(PairwiseDemo);
demos.push(PartitionDemo);
demos.push(SwitchAllDemo);
demos.push(ToArrayDemo);
demos.push(ZipAllDemo);
demos.push(RepeatDemo);
demos.push(RepeatWhenDemo);
demos.push(IgnoreElementsDemo);
demos.push(FinalizeDemo);
demos.push(AuditTimeDemo);
demos.push(SampleTimeDemo);
demos.push(ObserveOnDemo);
demos.push(SubscribeOnDemo);

const subject = new Subject();
const _ = (i: any) => i();

of(...demos)
    .pipe(last()).subscribe(d => {
        const name = d.name.replace('Demo', '');
        (<any>document.getElementById('input')).value = name;
    });

of(...demos)
    .pipe(
        repeatWhen(_ => subject),
        filter(d => {
            const name = d.name.replace('Demo', '').toLowerCase();
            return name === (<any>document.getElementById('input')).value.toLowerCase();
        })
    ).subscribe(_)

document.getElementById('input').addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        event.preventDefault();
        subject.next();
    }
});