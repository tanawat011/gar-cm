import { CodeDisplay, MockupBox } from '@/components/Common'
import { Grid } from '@/libs/pureTailwind'

export const Responsive = () => {
  return (
    <CodeDisplay
      id='responsive'
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
