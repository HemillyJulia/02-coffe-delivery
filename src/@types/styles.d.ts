// Arquivo de definição de tipos, aqui só tem tipagem.

import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

// Estou guardando esse valor inferido acima de quais são as propriedades
// que existem dentro do meu tema dentro da variável abaixo:
type ThemeType = typeof defaultTheme



declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
