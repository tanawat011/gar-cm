import Image from 'next/image'

import TDDImage from '@/assets/images/fizzBuzz/tdd.webp'

export const Content1 = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl'>Test-Driven Developer</h1>

      <br />

      <p className='leading-6'>
        TDD เป็นปลักการและแนวคิดในการพัฒนาระบบหรือ Software
        ที่จะให้ความสำคัญกับการเขียน Test ของความน่าจะเป็นของ Function
        หรือระบบที่เราจะเขียน ก่อนจะลงมือทำจริง สิ่งสำคัญในการพัฒนาด้วย TDD
        เลยคือ
        <p>- Code ดูเรียบร้อย</p>
        <p>- ง่ายต่อการอ่าน</p>
        <p>- ลดข้อบกพร่องหรือ Bugs ที่อาจจะเกิดขึ้น</p>
        <p>- ง่ายต่อการดูแลและแก้ไข</p>
      </p>

      <br />

      <div className='flex flex-col w-full justify-center items-center'>
        <Image
          src={TDDImage}
          alt='tdd'
          width={400}
          height={400}
          quality={100}
        />
        <span className='pt-2'>
          Thanks image from{' '}
          <a href='https://www.guru99.com/test-driven-development.html'>
            guru99.com
          </a>
        </span>
      </div>
    </div>
  )
}
