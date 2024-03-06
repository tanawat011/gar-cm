import type { ComponentDocumentFC } from '@/libs/componentDocument/types'

import { MockupBox } from '@/components/Common'
import { CodeDisplay } from '@/libs/componentDocument'
import { Grid } from '@/libs/pureTailwind'

export const Responsive: ComponentDocumentFC = (props) => {
  return (
    <CodeDisplay
      {...props}
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
