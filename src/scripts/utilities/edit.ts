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
