import { useIntl } from 'react-intl'

const localeToCurrency = {
  'en-US': 'USD',
  'pt-BR': 'BRL',
  'en-GB': 'GBP',
  'fr-FR': 'EUR',
  'ja-JP': 'JPY'
} as const

type SupportedLocales = keyof typeof localeToCurrency
type SupportedCurrencies = (typeof localeToCurrency)[SupportedLocales]

export const useCurrency = (value?: SupportedCurrencies): SupportedCurrencies => {
  const { locale } = useIntl()
  return value || localeToCurrency[locale as SupportedLocales] || 'USD'
}
