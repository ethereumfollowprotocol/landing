import { Flex } from '@radix-ui/themes'

import { Header } from '#/components/header.tsx'
import { Footer } from '#/components/footer.tsx'

export default function App() {
  return (
    <Flex>
      <Header />
      <Footer />
    </Flex>
  )
}
