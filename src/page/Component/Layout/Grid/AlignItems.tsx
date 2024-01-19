import { CodeDisplay, MockupBox } from '@/components/Common'
import { Grid, GridItem, Box } from '@/libs/pureTailwind'

export const AlignItems = () => {
  return (
    <CodeDisplay
      id='align-items'
      title='Align items'
      detail=''
      code={`<Grid col={{ default: 1, md: 2, xl: 3 }} className='flex gap-3'>
  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} alignItems={'start'}>
      <GridItem rowSpan={2}>
        <MockupBox label='start' />
      </GridItem>
      <MockupBox label='1' height='none' className='h-32' />
    </Grid>
  </Box>

  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} alignItems={'center'}>
      <GridItem rowSpan={2}>
        <MockupBox label='center' />
      </GridItem>
      <MockupBox label='1' height='none' className='h-32' />
    </Grid>
  </Box>

  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} alignItems={'end'}>
      <GridItem rowSpan={2}>
        <MockupBox label='end' />
      </GridItem>
      <MockupBox label='1' height='none' className='h-32' />
    </Grid>
  </Box>

  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} alignItems={'baseline'}>
      <GridItem rowSpan={2}>
        <MockupBox label='baseline' />
      </GridItem>
      <MockupBox label='1' height='none' className='h-32' />
    </Grid>
  </Box>

  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} alignItems={'stretch'}>
      <GridItem rowSpan={2}>
        <MockupBox label='stretch' />
      </GridItem>
      <MockupBox label='1' height='none' className='h-32' />
    </Grid>
  </Box>

  <Box className='p-3 w-full'>
    <Grid col={2} colGap={3} alignItems={{ default: 'center', md: 'start', lg: 'end' }}>
      <GridItem rowSpan={2}>
        <MockupBox label='responsive' />
      </GridItem>
      <MockupBox label='1' height='none' className='h-32' />
    </Grid>
  </Box>
</Grid>`}
    >
      <Grid col={{ default: 1, md: 2, xl: 3 }} className='flex gap-3'>
        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} alignItems={'start'}>
            <GridItem rowSpan={2}>
              <MockupBox label='start' />
            </GridItem>
            <MockupBox label='1' height='none' className='h-32' />
          </Grid>
        </Box>

        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} alignItems={'center'}>
            <GridItem rowSpan={2}>
              <MockupBox label='center' />
            </GridItem>
            <MockupBox label='1' height='none' className='h-32' />
          </Grid>
        </Box>

        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} alignItems={'end'}>
            <GridItem rowSpan={2}>
              <MockupBox label='end' />
            </GridItem>
            <MockupBox label='1' height='none' className='h-32' />
          </Grid>
        </Box>

        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} alignItems={'baseline'}>
            <GridItem rowSpan={2}>
              <MockupBox label='baseline' />
            </GridItem>
            <MockupBox label='1' height='none' className='h-32' />
          </Grid>
        </Box>

        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} alignItems={'stretch'}>
            <GridItem rowSpan={2}>
              <MockupBox label='stretch' />
            </GridItem>
            <MockupBox label='1' height='none' className='h-32' />
          </Grid>
        </Box>

        <Box className='p-3 w-full'>
          <Grid col={2} colGap={3} alignItems={{ default: 'center', md: 'start', lg: 'end' }}>
            <GridItem rowSpan={2}>
              <MockupBox label='responsive' />
            </GridItem>
            <MockupBox label='1' height='none' className='h-32' />
          </Grid>
        </Box>
      </Grid>
    </CodeDisplay>
  )
}
