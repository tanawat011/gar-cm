import { MockupBox } from '@/components/Common'
import { CodeDisplay } from '@/libs/componentDocument'
import { Grid } from '@/libs/pureTailwind'

export const Basic = () => {
  return (
    <CodeDisplay
      id='basic'
      title='Basic Grid'
      detail='The grid creates visual consistency between layouts while allowing flexibility across a wide variety of
      designs. Material Design`s responsive UI is based on a 12-column grid layout.'
      code={`<Grid col={3} gap={3}>
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
</Grid>`}
    >
      <Grid col={3} gap={3}>
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
