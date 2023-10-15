import { CodeBlock } from '@/components/Common'

export const Content5 = () => {
  return (
    <div>
      <h1 className='text-xl'>Refactor</h1>
      <br />
      <div className='leading-6 mb-4'>
        <p>- Unit Test</p>

        <CodeBlock
          showLineNumbers
          emphasize
          width='half'
          className='ml-4'
          text={`// fizzBuzz.test.ts
describe('FizzBuzz', () => {
  test.each([
    [1, 1],
    [2, 2],
    [3, 'Fizz'],
    [4, 4],
    [5, 'Buzz'],
    [6, 'Fizz'],
    [7, 7],
    [8, 8],
    [9, 'Fizz'],
    [10, 'Buzz'],
    [11, 11],
    [12, 'Fizz'],
    [13, 13],
    [14, 14],
    [15, 'FizzBuzz'],
    [16, 16],
    [17, 17],
    [18, 'Fizz'],
    [19, 19],
    [20, 'Buzz'],
    [21, 'Fizz'],
    [22, 22],
    [23, 23],
    [24, 'Fizz'],
    [25, 'Buzz'],
    [26, 26],
    [27, 'Fizz'],
    [28, 28],
    [29, 29],
    [30, 'FizzBuzz'],
  ])('should corrected %i', (num, expected) => {
    const result = fizzBuzz(num)
    expect(result).toEqual(expected)
  })
})`}
        />
        <br />
        <p>- Function Code</p>

        <CodeBlock
          showLineNumbers
          emphasize
          width='full'
          className='ml-4'
          text={`// fizzBuzz.ts
export const fizzBuzz = (num) => {
  const isFizz = num % 3 === 0
  const isBuzz = num % 5 === 0
  const isFizzBuzz = isFizz && isBuzz

  if (isFizzBuzz) return 'FizzBuzz'

  if (isFizz) return 'Fizz'

  if (isBuzz) return 'Buzz'

  return num
}`}
        />
      </div>
    </div>
  )
}
