export const $ = <E extends Element = Element> (elm: string): E => document.querySelector(elm)!
export const $$ = <E extends Element = Element> (elm: string): NodeListOf<E> => document.querySelectorAll(elm)

// const list = document.querySelectorAll('.navbar li')
// const listLI = $$<HTMLLIElement>('.navbar li')
// const $form = $<HTMLFormElement>('#the-form')
// const $input = $form['the-input']
// console.log(typeof $input)

/*  */

// HTMLCollectionOf<HTMLFormElement>
// export const $f = (elm: string) => document.forms[elm]
// export const $i = (elm: string) => document.images[elm]
// export const $l = (elm: string) => document.links[elm]

export const print = console.log
export const direct = console.dir
export const table = console.table
export const check = console.assert
export const debug = console.debug
export const start = console.time
export const stop = console.timeEnd

/*  */

export const type = (data: unknown) => typeof data;
export const str = (data: unknown) => `${data}`;
export const int = (data: string) => +data;
export const bool = (data: unknown) => !!data;
export const len = (data: string | Object[]) => data.length;

/*  */

// const redirect = (url: string) => window.location = url

// const range = (num: number) => [...Array(num).keys()]

const ranges = (
  start: number, stop: number, step: number
): number[] | number => {
  const result: number[] = []

  if (typeof start !== 'number') return 0
  // one param defined
  if (typeof stop === 'undefined') { stop = start; start = 0; }
  // two param defined
  if (typeof step === 'undefined') step = 1
  // three param defined
  if ((step > 0 && start >= stop) || (step < 0 && start <= stop))  
    return []
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) 
    result.push(i)

  return result
}

export const random = (): 1 | 0 => (Math.random() > 0.5) ? 1 : 0

export const randomRange = (
  min: number, max: number, opt: number
): number => {
  // MIN <= N < MAX
  if (typeof min !== 'number') return 0;
  if (typeof max === 'undefined') { max = min; min = 0; }
  const diff = max - min + (opt ? 1 : 0);
  return Math.floor((Math.random() * diff + min));
}

const randomArrChoice = (
  arr: unknown[]
): unknown => (
  arr[Math.floor(Math.random() * arr.length)]
)

const randomArrShuffle = (
  arr: unknown[]
): unknown[] => {
  let currID: number = arr.length
  
  while (0 !== currID) {
    // Pick a remaining array item
    const randID = Math.floor(Math.random() * currID--);
    // Swap w/ the current array item
    [arr[currID], arr[randID]] = [arr[randID], arr[currID]]
  }

  return arr
}

/*  */
