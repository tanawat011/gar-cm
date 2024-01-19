import { MockupBox } from '@/components/Common'
import { CodeDisplay } from '@/libs/componentDocument'
import { Box, Grid } from '@/libs/pureTailwind'

export const AlignSelf = () => {
  return (
    <CodeDisplay
      id='align-self'
      title='Align self'
      detail=''
      code={`<Grid col={{ default: 1, md: 2, xl: 3 }} className='gap-3'>
  <Box className='p-3 w-full h-32 flex'>
    <Grid width='full' col={2} gap={3} alignSelf={'start'}>
      <MockupBox label='start' />
      <MockupBox label='start' />
    </Grid>
  </Box>

  <Box className='p-3 w-full h-32 flex'>
    <Grid width='full' col={2} gap={3} alignSelf={'center'}>
      <MockupBox label='center' />
      <MockupBox label='center' />
    </Grid>
  </Box>

  <Box className='p-3 w-full h-32 flex'>
    <Grid width='full' col={2} gap={3} alignSelf={'end'}>
      <MockupBox label='end' />
      <MockupBox label='end' />
    </Grid>
  </Box>

  <Box className='p-3 w-full h-32 flex'>
    <Grid width='full' col={2} gap={3} alignSelf={'baseline'}>
      <MockupBox label='baseline' />
      <MockupBox label='baseline' />
    </Grid>
  </Box>

  <Box className='p-3 w-full h-32 flex'>
    <Grid width='full' col={2} gap={3} alignSelf={'stretch'}>
      <MockupBox label='stretch' />
      <MockupBox label='stretch' />
    </Grid>
  </Box>

  <Box className='p-3 w-full h-32 flex'>
    <Grid width='full' col={2} gap={3} alignSelf={{ default: 'center', md: 'start', lg: 'end' }}>
      <MockupBox label='responsive' />
      <MockupBox label='responsive' />
    </Grid>
  </Box>
</Grid>`}
    >
      <Grid col={{ default: 1, md: 2, xl: 3 }} className='gap-3'>
        <Box className='p-3 w-full h-32 flex'>
          <Grid width='full' col={2} gap={3} alignSelf={'start'}>
            <MockupBox label='start' />
            <MockupBox label='start' />
          </Grid>
        </Box>

        <Box className='p-3 w-full h-32 flex'>
          <Grid width='full' col={2} gap={3} alignSelf={'center'}>
            <MockupBox label='center' />
            <MockupBox label='center' />
          </Grid>
        </Box>

        <Box className='p-3 w-full h-32 flex'>
          <Grid width='full' col={2} gap={3} alignSelf={'end'}>
            <MockupBox label='end' />
            <MockupBox label='end' />
          </Grid>
        </Box>

        <Box className='p-3 w-full h-32 flex'>
          <Grid width='full' col={2} gap={3} alignSelf={'baseline'}>
            <MockupBox label='baseline' />
            <MockupBox label='baseline' />
          </Grid>
        </Box>

        <Box className='p-3 w-full h-32 flex'>
          <Grid width='full' col={2} gap={3} alignSelf={'stretch'}>
            <MockupBox label='stretch' />
            <MockupBox label='stretch' />
          </Grid>
        </Box>

        <Box className='p-3 w-full h-32 flex'>
          <Grid width='full' col={2} gap={3} alignSelf={{ default: 'center', md: 'start', lg: 'end' }}>
            <MockupBox label='responsive' />
            <MockupBox label='responsive' />
          </Grid>
        </Box>
      </Grid>
    </CodeDisplay>
  )
}
