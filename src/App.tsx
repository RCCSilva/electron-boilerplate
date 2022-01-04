import { Main } from './pages/Main'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = (): React.ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  )
}
