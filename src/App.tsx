import { Avatar, Box, Card, Flex, Grid, Link, Text } from '@radix-ui/themes'

import { Header } from '#/components/header.tsx'

export const launchPartners = [
  {
    name: 'Skiff',
    url: 'https://skiff.org',
    logo: '/skiff.png'
  },
  {
    name: 'Nifty Island',
    url: 'https://niftyisland.io',
    logo: '/niftyisland.png'
  },
  {
    name: 'Nimi',
    url: 'https://nimi.xyz',
    logo: '/nimi.png'
  },
  {
    name: 'Llamafolio',
    url: 'https://llamafolio.xyz',
    logo: '/llamafolio.png'
  },
  {
    name: 'Namehash',
    url: 'https://namehash.xyz',
    logo: '/namehash.png'
  },
  {
    name: 'Interface',
    url: 'https://interface.xyz',
    logo: '/interface.png'
  },
  {
    name: '1w3',
    url: 'https://1w3.io',
    logo: '/1w3.png'
  },
  {
    name: 'Outputs',
    url: 'https://outputs.io',
    logo: '/outputs.png'
  },
  {
    name: 'Fileserve',
    url: 'https://fileserve.io',
    logo: '/fileserve.png'
  },
  {
    name: 'eth.ad',
    url: 'https://eth.ad',
    logo: '/eth.ad.png'
  },
  {
    name: 'Si HER',
    url: 'https://siher.io',
    logo: '/siher.png'
  },
  {
    name: 'GoDID',
    url: 'https://godid.io',
    logo: '/godid.png'
  }
] satisfies Array<{
  name: string
  url: string
  logo: string
}>

export default function App() {
  return (
    <Flex mx='auto' width='100%' justify='center'>
      <Header />
      <Flex justify='center' direction='column' gap='6' mx='auto' className='mt-10 sm:mt-2'>
        <Flex align='center' gap='5' justify='center'>
          <Avatar src='/logo.png' fallback={''} size='8' />
          <Flex direction='column'>
            <Text className='text-[#FF79C9]' size='7' weight='bold'>
              Ethereum
            </Text>
            <Text className='text-[#FF79C9]' size='7' weight='bold'>
              Follow
            </Text>
            <Text className='text-[#FF79C9]' size='7' weight='bold'>
              Protocol
            </Text>
          </Flex>
        </Flex>
        <p className='text-zinc-900 text-lg sm:text-xl font-bold mx-4'>
          It{"'"}s about who you know. The social graph for Ethereum.
        </p>
        <p className='text-zinc-500 text-5xl sm:text-6xl font-bold'>Coming Soon</p>
        <Box className='p-4 bg-white/50 text-black font-bold text-center text-sm rounded-xl mx-2'>
          <Text size='3'>Launch Partners</Text>
          <Grid columns='6' rows='2' gap='1' width='100%'>
            {launchPartners.map(partner => (
              <Box>
                <Link
                  className='text-black text-xs'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={partner.url}
                >
                  <img
                    src={partner.logo}
                    width='50'
                    height='50'
                    alt={partner.name}
                    className='mx-auto pt-4'
                  />
                  {partner.name}
                </Link>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box
          py='4'
          mx='2'
          className='bg-white/50 text-black font-bold text-center text-sm rounded-xl'
        >
          <Text size='3'>Supported by grants from</Text>
          <Link target='_blank' rel='noopener noreferrer' href='https://ensdao.org/'>
            <img
              src='/ensdao.png'
              width='100'
              height='100'
              alt='ens dao'
              className='mx-auto pt-4'
            />
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}
