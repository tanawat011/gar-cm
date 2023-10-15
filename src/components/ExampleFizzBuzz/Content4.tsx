import { CodeBlock } from '@/components/Common'

export const Content4 = () => {
  return (
    <div>
      <h1 className='text-xl'>Write Test Case</h1>
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
  test('should corrected 1', () => {
    const result = fizzBuzz(1)
    expect(result).toEqual(1)
  })

  // ... more test cases

  test('should corrected 30', () => {
    const result = fizzBuzz(30)
    expect(result).toEqual('FizzBuzz')
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
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'

  if (num % 3 === 0) return 'Fizz'

  if (num % 5 === 0) return 'Buzz'

  return num
}`}
        />
      </div>
    </div>
  )
}
