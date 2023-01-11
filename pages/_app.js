import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'

import { BaseProvider, DarkTheme } from 'baseui'
import { persistor, store } from '../redux/store'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { RouteProgress } from '../components/ui/route-progress/RouteProgress'
import SEO from '../next-seo.config'
import { Provider as StyletronProvider } from 'styletron-react'
import { ToasterContainer } from 'baseui/toast'
import { styletron } from '../styletron'
import { useEffect } from 'react'
import { useProgressStore } from '../route-progress'
import { useRouter } from 'next/router'

export default function LimoCVO({ Component, pageProps }) {
  // Route switching loader
  const setIsAnimating = useProgressStore(state => state.setIsAnimating)
  const isAnimating = useProgressStore(state => state.isAnimating)
  const router = useRouter()
  useEffect(() => {
    const handleStart = () => setIsAnimating(true)
    const handleStop = () => setIsAnimating(false)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RouteProgress isAnimating={isAnimating} />
      <DefaultSeo {...SEO} />
      <StyletronProvider value={styletron}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BaseProvider theme={DarkTheme}>
              <ToasterContainer
                placement="topRight"
                closeable={false}
                autoHideDuration={1500}>
                <Component {...pageProps} />
              </ToasterContainer>
            </BaseProvider>
          </PersistGate>
        </Provider>
      </StyletronProvider>
    </>
  )
}
