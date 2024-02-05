import { MockupBox } from '@/components/Common'
import { CodeDisplay } from '@/libs/componentDocument'
import { Grid } from '@/libs/pureTailwind'

export const Responsive: React.FC<{ id: string }> = ({ id }) => {
  return (
    <CodeDisplay
      id={id}
      title='Responsive'
      detail=''
      code={`<Grid col={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }} gap={3}>
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
  <MockupBox label='1' />
</Grid>`}
    >
      <Grid col={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }} gap={3}>
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
