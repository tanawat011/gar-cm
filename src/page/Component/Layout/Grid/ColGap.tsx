import { MockupBox } from '@/components/Common'
import { CodeDisplay } from '@/libs/componentDocument'
import { Grid } from '@/libs/pureTailwind'

export const ColGap: React.FC<{ id: string }> = ({ id }) => {
  return (
    <CodeDisplay
      id={id}
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
