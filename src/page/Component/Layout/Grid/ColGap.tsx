import { CodeDisplay, MockupBox } from '@/components/Common'
import { Grid } from '@/libs/pureTailwind'

export const ColGap = () => {
  return (
    <CodeDisplay
      id='col-gap'
      title='Column Gap'
      detail=''
      code={`<Grid col={3} gap={3} colGap={12}>
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
</Grid>`}
    >
      <Grid col={3} gap={3} colGap={12}>
        <MockupBox label='1' />
        <MockupBox label='1' />
        <MockupBox label='1' />
        <MockupBox label='1' />
        <MockupBox label='1' />
        <MockupBox label='1' />
      </Grid>
    </CodeDisplay>
  )
}
