# What dis is
A Vue based exercise I did during the interview process for a crypto startup in Vancouver

## Requirement
Replicate a rudimentary list component based on a provided screenshot, using Vue JS.

- Notes
    - Vuex for state management
    - Forked webpack-exports-loader (https://github.com/LukeTully/exports-loader) to fix how it wraps legacy non es6 modules (PR coming soon)

- Things that I intentionally didn't spend a ton of time on
    - Animations. I merely included the "appear" animation to get a brief example working. In any final product, I'd be hesitant to include it anyway, because it's easy overdo it, but furter interaction could lend itself to increased use.
    - CSS. It's really hacked together so far. Might improve on principle
    - Design. Takes more time than I'm able to devote to this. It doesn't break horribly.
    - Error handling. It's quite rudementary. This particular company was expecting too much from prospective hires in my opinion, so I cut it off here and didn't devote more time to this during the interview process.

## Build Setup

``` bash
# install dependencies
npm install

# install dev dependencies
npm install --only-dev

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build for production and run in webpack-dev-server with compression
npm run prod
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
