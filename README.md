# nuxt-ssr-guide

# NOTES 

## Call order

1. nuxtServerInit(store, context)
2. middleware(context)
3. asyncData(context)
4. serverPrefetch()
5. fetch()


## nuxtServerInit 

+ You can use nuxtServerInit only if you use Vuex store. 
+ This method can be called only in primary store module 
+ You can get context as the second argument
+ If you want to call some API there you should use async/await syntax or return Promise.
nuxtServerInit
+ is called only on Server-Side and before the asyncData and fetch method.

## asyncData(context)

+ you can use asyncData only in page components
+ data returned by asyncData are merged with page data
+ you don't have access to this, but you can get context object
+ asyncData is called server-side once and every time on client-side when route is changed
+ you have to take care about errors handling on server-side.


## serverPrefetch()
+ access to this
+ server-side only
+ only overrides data defined before


## fetch() 
+ you can use fetch in any component
+ fetch is able to override data you defined before
+ you have access to this 
+ you have also access to context
+ fetch is called server-side once and every time on client-side when route is changed - you can disable it on server side.
+ you don't have to care about errors on server-side - it doesn't break your page - but it doesn't mean you should ignore them, especially on client-side

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


resources 
https://pbs.twimg.com/media/DeDKSyuUwAARbq-?format=jpg&name=4096x4096 

https://github.com/nuxt/rfcs/issues/27
