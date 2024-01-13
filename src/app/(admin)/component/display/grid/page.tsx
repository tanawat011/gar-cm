import { Card, CardBody } from '@nextui-org/react'

import { Grid } from '@/libs/pureTailwind'

export default function Page() {
  return (
    <div>
      <Grid col={6} gap={2}>
        <Card>
          <CardBody>xxx</CardBody>
        </Card>
        <Card>
          <CardBody>xxx</CardBody>
        </Card>
        <Card>
          <CardBody>xxx</CardBody>
        </Card>
        <Card>
          <CardBody>xxx</CardBody>
        </Card>
        <Card>
          <CardBody>xxx</CardBody>
        </Card>
        <Card>
          <CardBody>xxx</CardBody>
        </Card>
      </Grid>
    </div>
  )
}
