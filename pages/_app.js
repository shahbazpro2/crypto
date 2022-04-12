import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import HeaderFooterWrapper from '../components/wrappers/HeaderFooterWrapper'
import '../styles/globals.css'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <HeaderFooterWrapper>
        <Component {...pageProps} />
      </HeaderFooterWrapper>
    </ThemeProvider>
  </StyledEngineProvider>
}

export default MyApp
