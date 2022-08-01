import { fromEvent } from 'rxjs';
import { exhaustMap, map, takeUntil } from 'rxjs/operators';

const search = document.getElementById('searchbar');

const keyup$ = fromEvent(search, 'keyup');
keyup$.subscribe((evt) => {
  console.log((evt.target as HTMLInputElement).value);
});
