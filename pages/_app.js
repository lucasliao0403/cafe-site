import '@/styles/globals.css'
import Layout from './layout.js'

export default function App({ Component, pageProps }) {
  return (
    <div>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
  )
}
