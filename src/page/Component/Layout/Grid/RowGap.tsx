import { CodeDisplay, MockupBox } from '@/components/Common'
import { Grid } from '@/libs/pureTailwind'

export const RowGap = () => {
  return (
    <CodeDisplay
      id='row-gap'
      title='Row Gap'
      detail=''
      code={`<Grid col={3} gap={3} rowGap={12}>
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
</Grid>`}
    >
      <Grid col={3} gap={3} rowGap={12}>
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
