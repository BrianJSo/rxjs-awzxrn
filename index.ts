import { fromEvent } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import {
  map,
  debounceTime,
  throttleTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';

const search = document.getElementById('searchbar');

const keyup$ = fromEvent(search, 'keyup');

keyup$
  .pipe(
    throttleTime(300),
    map((evt: KeyboardEvent) => (evt.target as HTMLInputElement).value),
    distinctUntilChanged(),
    filter((value) => value.length > 2),
    switchMap((value) => {
      console.log('hello');
      return fromFetch('https://api.jikan.moe/v4/anime?q=' + value).pipe(
        switchMap((response) => response.json())
      );
    })
  )
  .subscribe((value) => {
    console.log(value);
  });
