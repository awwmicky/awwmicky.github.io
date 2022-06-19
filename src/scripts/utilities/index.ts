export const $ = <E extends Element = Element> (elm: string): E => document.querySelector(elm)!
export const $$ = <E extends Element = Element> (elm: string): NodeListOf<E> => document.querySelectorAll(elm)

// const list = document.querySelectorAll('.navbar li')
// const listLI = $$<HTMLLIElement>('.navbar li')
// const $form = $<HTMLFormElement>('#the-form')
// const $input = $form['the-input']
// console.log(typeof $input)

// HTMLCollectionOf<HTMLFormElement>
// export const $f = (elm: string) => document.forms[elm]
// export const $i = (elm: string) => document.images[elm]
// export const $l = (elm: string) => document.links[elm]

/*  */

export const print = console.log
export const direct = console.dir
export const table = console.table
export const check = console.assert
export const debug = console.debug
export const start = console.time
export const stop = console.timeEnd

/*  */

export const type = (data: unknown) => typeof data
export const str = (data: unknown) => `${data}`
export const int = (data: string) => +data
export const bool = (data: unknown) => !!data
export const len = (data: string | Object[]) => data.length

/*  */

export const delay = (time: number = 1500) => new Promise((resolve) => setTimeout(resolve, time))
export const redirect = (url: string, target: '_self' | '_blank' | '_top' = "_self") => window.open(url, target)

/*  */