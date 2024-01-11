'use client'

import { Card, CardBody } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

import { Grid } from '@/components/Common'

export default function PageGrid() {
  return (
    <div>
      <Grid col={{ default: 1, md: 3, lg: 4 }} alignItems={'center'} justifyItem={'center'} width='full'>
        <Card>
          <CardBody className='w-full'>xxx</CardBody>
        </Card>
        <Card>
          <CardBody className='w-full'>xxx</CardBody>
        </Card>
        <Card>
          <CardBody className='w-full'>xxx</CardBody>
        </Card>
        <Card>
          <CardBody className='w-full'>xxx</CardBody>
        </Card>
        <Card>
          <CardBody className='w-full'>xxx</CardBody>
        </Card>
        <Card>
          <CardBody className='w-full'>xxx</CardBody>
        </Card>
        <Card>
          <CardBody className='w-full'>xxx</CardBody>
        </Card>
        <Card>
          <CardBody className='w-full'>xxx</CardBody>
        </Card>
      </Grid>
    </div>
  )
}
