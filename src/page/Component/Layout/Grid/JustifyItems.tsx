import { MockupBox } from '@/components/Common'
import { CodeDisplay } from '@/libs/componentDocument'
import { Grid, GridItem, Box } from '@/libs/pureTailwind'

export const JustifyItems = () => {
  return (
    <CodeDisplay
      id='justify-items'
      title='Justify items'
      detail=''
      code={`<Grid col={{ default: 1, md: 2, xl: 3 }} className='flex gap-3'>
  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} justifyItems={'start'}>
      <MockupBox label='start' />
      <MockupBox label='start' />
    </Grid>
  </Box>

  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} justifyItems={'center'}>
      <MockupBox label='center' />
      <MockupBox label='center' />
    </Grid>
  </Box>

  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} justifyItems={'end'}>
      <MockupBox label='end' />
      <MockupBox label='end' />
    </Grid>
  </Box>

  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} justifyItems={'stretch'}>
      <MockupBox label='stretch' />
      <MockupBox label='stretch' />
    </Grid>
  </Box>

  <GridItem colSpan={{ default: 1, md: 2 }}>
    <Box className='p-3 w-full'>
      <Grid col={2} colGap={3} justifyItems={{ default: 'center', md: 'start', lg: 'end' }}>
        <MockupBox label='responsive' />
        <MockupBox label='responsive' />
      </Grid>
    </Box>
  </GridItem>
</Grid>`}
    >
      <Grid col={{ default: 1, md: 2, xl: 3 }} className='flex gap-3'>
        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} justifyItems={'start'}>
            <MockupBox label='start' />
            <MockupBox label='start' />
          </Grid>
        </Box>

        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} justifyItems={'center'}>
            <MockupBox label='center' />
            <MockupBox label='center' />
          </Grid>
        </Box>

        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} justifyItems={'end'}>
            <MockupBox label='end' />
            <MockupBox label='end' />
          </Grid>
        </Box>

        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} justifyItems={'stretch'}>
            <MockupBox label='stretch' />
            <MockupBox label='stretch' />
          </Grid>
        </Box>

        <GridItem colSpan={{ default: 1, md: 2 }}>
          <Box className='p-3 w-full'>
            <Grid col={2} colGap={3} justifyItems={{ default: 'center', md: 'start', lg: 'end' }}>
              <MockupBox label='responsive' />
              <MockupBox label='responsive' />
            </Grid>
          </Box>
        </GridItem>
      </Grid>
    </CodeDisplay>
  )
}
