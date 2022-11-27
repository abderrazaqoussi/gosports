// ** Next Imports
import Head from 'next/head'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// **
import { QueryClient, QueryClientProvider } from 'react-query'

// ** Configure JSS & ClassName
export default function App({ Component, pageProps }) {
  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <title>{`${themeConfig.templateName}`}</title>
        <meta name='description' content={`${themeConfig.templateName} `} />
        <meta name='keywords' content='' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='referrer' content='no-referrer' />
      </Head>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </QueryClientProvider>
    </>
  )
}
