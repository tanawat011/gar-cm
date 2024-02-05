import { MockupBox } from '@/components/Common'
import { CodeDisplay } from '@/libs/componentDocument'
import { Grid, GridItem } from '@/libs/pureTailwind'

export const ColSpan: React.FC<{ id: string }> = ({ id }) => {
  return (
    <CodeDisplay
      id={id}
      title='Column span'
      detail=''
      code={`<Grid col={3} gap={3}>
  <GridItem colSpan={2}>
    <MockupBox label='col-span=2' />
  </GridItem>

  <MockupBox label='1' />
  <MockupBox label='1' />

  <GridItem colSpan={2}>
    <MockupBox label='col-span=2' />
  </GridItem>
</Grid>`}
    >
      <Grid col={3} gap={3}>
        <GridItem colSpan={2}>
          <MockupBox label='col-span=2' />
        </GridItem>

        <MockupBox label='1' />
        <MockupBox label='1' />

        <GridItem colSpan={2}>
          <MockupBox label='col-span=2' />
        </GridItem>
      </Grid>
    </CodeDisplay>
  )
}
