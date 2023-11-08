import { defineConfig } from 'vite'
import million from 'million/compiler'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [million.vite({ auto: true }), react(), tsconfigPaths()]
})
