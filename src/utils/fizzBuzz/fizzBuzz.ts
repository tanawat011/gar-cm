export const fizzBuzz = (num: number): number | string => {
  const isFizz = num % 3 === 0
  const isBuzz = num % 5 === 0
  const isFizzBuzz = isFizz && isBuzz

  if (isFizzBuzz) return 'FizzBuzz'

  if (isFizz) return 'Fizz'

  if (isBuzz) return 'Buzz'

  return num
}
