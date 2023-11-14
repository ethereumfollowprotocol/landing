import { Avatar, Box, Card, Flex, Grid, Link, Text } from '@radix-ui/themes'

import { Header } from '#/components/header.tsx'

export const launchPartners = [
  {
    name: 'Skiff',
    url: 'https://skiff.org',
    logo: '/skiff.jpeg'
  },
  {
    name: 'Nifty Island',
    url: 'https://niftyisland.io',
    logo: '/niftyisland.jpeg'
  },
  {
    name: 'ENS Vision',
    url: 'https://ens.vision/',
    logo: '/ensvision.jpeg'
  },
  {
    name: 'Llamafolio',
    url: 'https://llamafolio.xyz',
    logo: '/llamafolio.jpeg'
  },
  {
    name: 'Interface',
    url: 'https://interface.xyz',
    logo: '/interface.jpeg'
  },
  {
    name: 'Daylight',
    url: 'https://www.daylight.xyz/',
    logo: '/daylight.jpeg'
  },
  {
    name: 'Namehash',
    url: 'https://namehash.xyz',
    logo: '/namehash.jpeg'
  },
  {
    name: 'eth.lk',
    url: 'https://eth.lk',
    logo: '/1w3.jpeg'
  },
  {
    name: 'eth.cd',
    url: 'https://eth.cd',
    logo: '/ethdotcd.jpeg'
  },
  {
    name: 'Nimi',
    url: 'https://nimi.xyz',
    logo: '/nimi.jpeg'
  },
  {
    name: 'Outposts',
    url: 'https://outposts.io',
    logo: '/outposts.jpeg'
  },
  {
    name: 'Fileverse',
    url: 'https://fileverse.io',
    logo: '/fileverse.jpeg'
  },
  {
    name: 'eth.ad',
    url: 'https://eth.ad',
    logo: '/ethad.jpeg'
  },
  {
    name: 'SI HER',
    url: 'https://siher.io',
    logo: '/siher.jpeg'
  },
  {
    name: 'GoDID',
    url: 'https://godid.io',
    logo: '/godid.jpeg'
  },
  {
    name: 'Neura Name',
    url: 'https://www.neuraname.com/',
    logo: '/neuraname.jpeg'
  },
  {
    name: 'Mask Network',
    url: 'https://mask.io/',
    logo: '/masknetwork.jpeg'
  },
  {
    name: 'eth.co',
    url: 'https://eth.co/',
    logo: '/ethdotco.jpeg'
  },
  {
    name: 'W3Link',
    url: 'https://w3.link/',
    logo: '/web3link.jpeg'
  },
  {
    name: 'web3.bio',
    url: 'https://web3.bio/',
    logo: '/web3bio.jpeg'
  }
] satisfies Array<{
  name: string
  url: string
  logo: string
}>

export default function App() {
  return (
    <Flex mx='auto' px='3' width='100%' justify='center' className='font-serif'>
      <Header />
      <Flex width='100%' justify='center' direction='column' gap='3' mx='auto' className='mt-20'>
        <Flex align='center' gap='5' justify='center' pt='1'>
          <Avatar src='/logo.png' fallback={''} className='shadow-xl rounded-full w-40 h-40' />
          <Flex direction='column' className='text-left'>
            <Text size='8' weight='bold'>
              Ethereum
            </Text>
            <Text size='8' weight='bold'>
              Follow
            </Text>
            <Text size='8' weight='bold'>
              Protocol
            </Text>
          </Flex>
        </Flex>
        <p className='text-zinc-900 text-lg font-bold mx-4 mt-4' style={{ fontSize: '27px' }}>
          It{"'"}s about who you know. The social graph for Ethereum.
        </p>

        <p className='text-[#888888] text-6xl sm:text-[5.2rem] font-semibold my-7' style={{ margin:'6rem 0 6rem 0' }}>
          Coming Soon
        </p>

        <Box className='bg-white/50 text-black font-bold text-center text-sm rounded-3xl mx-auto w-full max-w-4xl' style={{ padding:'2.5rem 4rem 2.5rem 4rem' }}>
          <p className='text-zinc-900 text-2xl font-bold pb-12 sm:pb-6' style={{ fontSize: '27px' }}>
            Launch Partners
          </p>
          <section className='w-full gap-y-8 gap-x-12 sm:gap-x-8 grid grid-cols-2 sm:grid-cols-6 grid-rows-2'>
            {launchPartners.map(partner => (
              <Box key={partner.name} width='100%'>
                <Link
                  className='text-black text-xs rounded-full space-y-2'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={partner.url}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className='mx-auto rounded-full sm:w-19 sm:h-19'
                  />
                  <p className='pt-1 mt-2 text-[1.3rem] font-bold' style={{ lineHeight: '25px' }} style={{ fontSize: '17px' }}>{partner.name}</p>
                </Link>
              </Box>
            ))}
          </section>
        </Box>
        <Box
          py='5'
          mx='auto'
          my='5'
          width='100%'
          className='bg-white/50 text-black font-bold text-center text-sm rounded-3xl max-w-4xl'
        >
          <p className='text-zinc-900 text-2xl font-bold pb-2' style={{ fontSize: '27px' }}>
            Supported by grants from:
          </p>
          <Link target='_blank' rel='noopener noreferrer' href='https://ensdao.org/'>
            <img
              src='/ensdao.png'
              width='230'
              height='175'
              alt='ens dao'
              className='mx-auto py-4'
            />
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}
