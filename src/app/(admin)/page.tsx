'use client'

import { useState } from 'react'

import { gql, useMutation } from '@apollo/client'
import { Button, Input, Textarea } from '@nextui-org/react'

import { FullScreenLoading } from '@/components/FullScreenLoading'

export default function Dashboard() {
  const [v, setV] = useState('')
  const [name, setName] = useState('')
  const [isInvalidV, setIsInvalidV] = useState<boolean | undefined>()
  const [isInvalidName, setIsInvalidName] = useState<boolean | undefined>()
  const [loading, setLoading] = useState(false)

  const [addReview] = useMutation(gql`
    mutation ($review: String!, $name: String!) {
      reviewMe(review: $review, name: $name) {
        id
      }
    }
  `)

  const onSubmit = async () => {
    setLoading(true)
    setIsInvalidV(!v)
    setIsInvalidName(!name)

    if (!v || !name) {
      return setLoading(false)
    }

    await addReview({ variables: { review: v, name } })

    window.location.href = '/thank-you'
  }

  return (
    <>
      {loading && <FullScreenLoading />}

      <div className='flex items-center justify-center'>
        <div className='flex flex-col gap-4 w-96'>
          <h3>
            เพื่อเป็นการปรับปรุงตัวเองให้ดีขึ้นในอนาคต อยากจะบอกอะไรนู๋ อยากให้นู๋เพิ่มความรู้ตรงไหนพัฒนาอะไร
            หรืออะไรดีอะไรไม่ดีบอกได้เลยน้าาา นู๋จาอาวไปปรับปรุงงงงง ขอแบบไม่เกรงจายยยยย
          </h3>

          <span>ขอบพระคุณทุกท่านด้วยนะค้าบบบ</span>

          <Textarea
            value={v}
            onValueChange={setV}
            placeholder='Please review pom T'
            errorMessage={isInvalidV && 'Please review noi naaaaaa'}
            color={isInvalidV ? 'danger' : 'default'}
            isInvalid={isInvalidV}
          />

          <Input
            value={name}
            onValueChange={setName}
            placeholder='Who r u?'
            errorMessage={isInvalidName && 'Bai noi naaaaaa'}
            color={isInvalidName ? 'danger' : 'default'}
            isInvalid={isInvalidName}
          />

          <span className='font-bold text-sm'>
            Regards, <br />
            Tanawat P.
            <br />
            <br />
            Thank you for your time.
          </span>

          <Button color='primary' onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </>
  )
}
