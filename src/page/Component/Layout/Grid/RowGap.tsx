import { MockupBox } from '@/components/Common'
import { CodeDisplay } from '@/libs/componentDocument'
import { Grid } from '@/libs/pureTailwind'

export const RowGap: React.FC<{ id: string }> = ({ id }) => {
  return (
    <CodeDisplay
      id={id}
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
