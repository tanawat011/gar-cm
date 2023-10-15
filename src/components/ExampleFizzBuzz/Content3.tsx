import Image from 'next/image'

import RunTestSuccessImg from '@/assets/images/fizzBuzz/run-test-success.png'
import { CodeBlock } from '@/components/Common'

export const Content3 = () => {
  return (
    <div>
      <h1 className='text-xl'>First Step</h1>
      <br />
      <div className='leading-6 mb-4'>
        <p>- Install node</p>

        <div className='flex items-center mb-4'>
          - Run&nbsp;
          <CodeBlock language='bash' text={'npm init'} width='fit' oneLine />
        </div>

        <p>- Write unit test</p>

        <CodeBlock
          showLineNumbers
          emphasize
          width='half'
          className='ml-4'
          text={`// fizzBuzz.test.ts
describe('FizzBuzz', () => {
  it('should corrected', () => {
    expect(1).toEqual(1)
  })
})`}
        />

        <div className='flex items-center mt-4'>
          - Run&nbsp;
          <CodeBlock language='bash' text={'yarn test'} width='fit' oneLine />
        </div>
        <p>&nbsp;&nbsp;&nbsp;- Why error?</p>
        <p>
          &nbsp;&nbsp;&nbsp;- ยังไม่ติดตั้ง jest กันยังไงล่ะ
          อ่ะต่อไปมาลองติดตั้ง jest กัน
        </p>
      </div>

      <div className='flex items-center'>
        - Run&nbsp;
        <CodeBlock language='bash' text={'yarn add jest'} width='fit' oneLine />
      </div>
      <div className='flex items-center mt-4'>
        - Run&nbsp;
        <CodeBlock language='bash' text={'yarn test'} width='fit' oneLine />
        &nbsp;again
      </div>

      <div className='w-full flex flex-col items-center'>
        <Image
          src={RunTestSuccessImg}
          alt='run-test-success'
          width={500}
          quality={100}
        />
      </div>
    </div>
  )
}
