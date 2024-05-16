import { Avatar, Box, Card, Flex, Grid, Link, Text } from '@radix-ui/themes'

import { Header } from '#/components/header.tsx'

export const launchPartners = [
  {
    name: 'PPM',
    url: 'https://marketplace.pudgypenguins.com/',
    logo: '/pudgypenguinsmarketplace.jpeg'
  },
  {
    name: 'Snapshot',
    url: 'https://snapshot.org/',
    logo: '/snapshot.jpeg'
  },
  {
    name: 'Nifty Island',
    url: 'https://niftyisland.io',
    logo: '/niftyisland.jpeg'
  },
  {
    name: 'Vision',
    url: 'https://vision.io/',
    logo: '/ensvision.jpeg'
  },
  {
    name: 'Interface',
    url: 'https://interface.social',
    logo: '/interface.jpeg'
  },
  {
    name: 'Daylight',
    url: 'https://www.daylight.xyz/',
    logo: '/daylight.jpeg'
  },
  {
    name: 'eth.limo',
    url: 'https://eth.limo/',
    logo: '/ethlimo.png'
  },
  {
    name: 'Namehash',
    url: 'https://namehash.io',
    logo: '/namehash.jpeg'
  },
  {
    name: 'LlamaFolio',
    url: 'https://llamafolio.com',
    logo: '/llamafolio.jpeg'
  },
  {
    name: 'Alpha Wallet',
    url: 'https://alphawallet.com/',
    logo: '/alphawallet.jpeg'
  },
  {
    name: 'Gallery',
    url: 'https://gallery.so/',
    logo: '/gallery.jpeg'
  },
  {
    name: 'Brume Wallet',
    url: 'https://brume.money',
    logo: '/brume.jpeg'
  },
  {
    name: 'Seam',
    url: 'https://seam.so/',
    logo: '/seam.jpeg'
  },
  {
    name: 'Center',
    url: 'https://center.app/',
    logo: '/center.jpeg'
  },
  {
    name: 'Nimi',
    url: 'https://nimi.io',
    logo: '/nimi.jpeg'
  },
  {
    name: 'ENSBook',
    url: 'https://ensbook.xyz/',
    logo: '/ensbook.jpeg'
  },
  {
    name: 'Roam',
    url: 'https://roam.xyz/',
    logo: '/roam.jpeg'
  },
  {
    name: 'NFT Valuations',
    url: 'https://nftvaluations.com/',
    logo: '/nftvaluations.jpeg'
  },
  {
    name: 'ENS Surf',
    url: 'https://ens.surf/',
    logo: '/enssurf.jpeg'
  },
  {
    name: 'Common Ground',
    url: 'https://www.commonground.cg/',
    logo: '/commonground.jpeg'
  },
  {
    name: 'Blockhead',
    url: 'https://blockhead.info/',
    logo: '/blockhead.jpeg'
  },
  {
    name: 'BerryLab',
    url: 'https://berrylab.xyz/',
    logo: '/berrylab.jpeg'
  },
  {
    name: 'TKN',
    url: 'https://tkn.xyz/',
    logo: '/tkn.jpeg'
  },
  {
    name: 'Saga',
    url: 'https://www.pob.studio/ethverse',
    logo: '/saga.jpeg'
  },
  {
    name: 'DappLooker',
    url: 'https://dapplooker.com/',
    logo: '/dapplooker.jpeg'
  },
  {
    name: 'Webhash',
    url: 'https://webhash.com',
    logo: '/webhash.jpeg'
  },
  {
    name: 'Payflow',
    url: 'https://payflow.me',
    logo: '/payflow.jpeg'
  },
  {
    name: 'Noves',
    url: 'https://noves.fi',
    logo: '/noves.jpeg'
  },
  {
    name: 'Persona',
    url: 'https://persona.art/',
    logo: '/persona.jpeg'
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
    name: 'Mest',
    url: 'https://mest.io',
    logo: '/mest.jpeg'
  },
  {
    name: '3cities',
    url: 'https://3cities.xyz/',
    logo: '/3cities.jpeg'
  },
  {
    name: 'SI HER',
    url: 'https://www.si3.space/',
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
  },
  {
    name: 'Domain Plug',
    url: 'http://domainplug.io/',
    logo: '/domainplug.jpeg'
  },
  {
    name: 'U3',
    url: 'https://u3.xyz/',
    logo: '/u3.jpeg'
  },
  {
    name: 'Namespace',
    url: 'https://namespace.ninja/',
    logo: '/namespace.jpeg'
  },
  {
    name: 'Icebreaker',
    url: 'https://www.icebreaker.xyz/',
    logo: '/icebreaker.png'
  },
  {
    name: 'Stargazer',
    url: 'https://stargazer.domains/',
    logo: '/stargazer.jpeg'
  },
  {
    name: 'Once Upon',
    url: 'https://www.onceupon.gg/home',
    logo: '/onceupon.jpeg'
  },
  {
    name: 'BendDAO',
    url: 'https://www.benddao.xyz/en/',
    logo: '/benddao.jpeg'
  },
  {
    name: 'Integrous',
    url: 'https://integrous.xyz/',
    logo: '/integrous.jpeg'
  },
  {
    name: 'Linkeh',
    url: 'https://www.linkeh.xyz/',
    logo: '/linkeh.jpeg'
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
      <Flex
        width='100%'
        justify='center'
        direction='column'
        mx='auto'
        className='mt-20 gap-12 sm:gap-16 md:gap-20'
      >
        <div>
          <img
            src='/public/full-logo.png'
            alt='Ethereum Follow Protocol logo'
            className='w-64 sm:w-80 mx-auto'
          />
          <p className='text-dark-gray text-2xl md:text-3xl font-bold mx-4 mt-4'>
            It&apos;s about{' '}
            <span className=' bg-gradient-to-r from-[#ffcb44] to-[#ff9c90] bg-clip-text text-transparent'>
              who
            </span>{' '}
            you know. The social graph for Ethereum.
          </p>
        </div>
        <p className='text-[#555555] text-5xl sm:text-[5.2rem] font-semibold'>Coming Soon 👀</p>
        <div>
          <Box className='glass-card sm:p-8 md:p-10 border-2 border-[#ffd6ba] p-4 text-black font-bold text-center text-sm rounded-3xl mx-auto w-full max-w-4xl'>
            <p className='text-zinc-900 text-3xl font-bold pb-12 sm:pb-6'>Launch Partners</p>
            <section className='w-full gap-y-8 gap-x-12 sm:gap-x-8 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 grid-rows-2'>
              {launchPartners.map(partner => (
                <Box key={partner.name} width='100%'>
                  <Link
                    className='text-black text-xs rounded-full space-y-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={partner.url}
                  >
                    <img
                      src={`/partners${partner.logo}`}
                      alt={partner.name}
                      className='mx-auto rounded-full sm:w-19 sm:h-19'
                    />
                    <p
                      className='pt-1 mt-2 text-[1.3rem] font-bold'
                      style={{ lineHeight: '25px', fontSize: '17px' }}
                    >
                      {partner.name}
                    </p>
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
            className='glass-card border-2 border-gray-100 text-dark-gray font-bold text-center text-sm rounded-3xl max-w-4xl'
          >
            <p className=' text-2xl sm:text-3xl font-bold pb-8'>Supported by grants from:</p>
            <Link target='_blank' rel='noopener noreferrer' href='https://ensdao.org/'>
              <img
                src='/sponsors/ensdao.png'
                width='180'
                alt='ens dao'
                className='mx-auto w-44 sm:w-60 rounded-[2rem] border-2 border-[#B879FF]'
              />
            </Link>
          </Box>
        </div>
      </Flex>
    </Flex>
  )
}
