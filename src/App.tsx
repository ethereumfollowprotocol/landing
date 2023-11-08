import { Avatar, Box, Card, Flex, Grid, Link, Text } from '@radix-ui/themes'

import { Header } from '#/components/header.tsx'
import { Footer } from '#/components/footer.tsx'

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
      <Flex justify='center' direction='column' gap='6' mx='auto'>
        <Flex align='center' gap='5' justify='center'>
          <Avatar src='/logo.png' fallback={''} size='8' />
          <Flex direction='column'>
            <Text className='text-[#FF79C9]' size='6' weight='bold'>
              Ethereum
            </Text>
            <Text className='text-[#FF79C9]' size='6' weight='bold'>
              Follow
            </Text>
            <Text className='text-[#FF79C9]' size='6' weight='bold'>
              Protocol
            </Text>
          </Flex>
        </Flex>
        <Text size='5' weight='bold'>
          It{"'"}s about who you know. The social graph for Ethereum.
        </Text>
        <Box>
          <Text size='9' weight='bold' className='text-gray-400'>
            Coming Soon
          </Text>
        </Box>
        <Card className='p-4 bg-white/50 text-black font-bold text-center text-sm border-transparent'>
          <Text>Launch Partners</Text>
          <Grid columns='6' rows='2' gap='3' width='100%'>
            {launchPartners.map(partner => (
              <Box>
                <Link
                  className='text-black'
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
        </Card>
        <Card className='bg-white/50 text-black font-bold text-center text-sm w-80 py-2 border-transparent mx-auto'>
          <Text>Supported by grants from</Text>
          <Link target='_blank' rel='noopener noreferrer' href='https://ensdao.org/'>
            <img
              src='/ensdao.png'
              width='100'
              height='100'
              alt='ens dao'
              className='mx-auto pt-4'
            />
          </Link>
        </Card>
      </Flex>
      <Footer />
    </Flex>
  )
}
