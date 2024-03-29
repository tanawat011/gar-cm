import type { ComponentDocumentFC } from '@/libs/componentDocument/types'

import { MockupBox } from '@/components/Common'
import { CodeDisplay } from '@/libs/componentDocument'
import { Grid, GridItem } from '@/libs/pureTailwind'

export const ResponsiveSpan: ComponentDocumentFC = (props) => {
  return (
    <CodeDisplay
      {...props}
      code={`<Grid col={3} gap={3}>
  <GridItem rowSpan={{ default: 1, lg: 2 }}>
    <MockupBox label='row-span-lg=2<br/>row-span=1' />
  </GridItem>

  <MockupBox label='1' />
  <MockupBox label='1' />

  <GridItem colSpan={{ default: 3, lg: 2 }}>
    <MockupBox label='col-span=3<br/>col-span-lg=2' />
  </GridItem>
</Grid>`}
    >
      <Grid col={3} gap={3}>
        <GridItem rowSpan={{ default: 1, lg: 2 }}>
          <MockupBox label='row-span-lg=2<br/>row-span=1' />
        </GridItem>

        <MockupBox label='1' />
        <MockupBox label='1' />

        <GridItem colSpan={{ default: 3, lg: 2 }}>
          <MockupBox label='col-span=3<br/>col-span-lg=2' />
        </GridItem>
      </Grid>
    </CodeDisplay>
  )
}
