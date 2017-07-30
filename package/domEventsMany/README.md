# @unction/domEventsMany


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> domEventsManyConfigurationType -> (string | Array<EventNameType>) -> ObservableType<EventType>

Takes many events or * and returns an observable of those events

``` javascript
domEventsMany({})(["click", "input"])(DOM)
```

returns

``` javascript
--click--input--input--click--input
```

``` javascript
domEventsMany({})("*")(DOM)
```

returns

``` javascript
--click--input--hover--change--click-->
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
