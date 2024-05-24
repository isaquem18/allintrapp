/**
 * Formata um valor numérico como moeda de acordo com a localidade e a moeda especificada.
 * @param value - O valor numérico a ser formatado.
 * @param currency - O código da moeda (por exemplo, "USD", "EUR", "BRL").
 * @param locale - A localidade para formatação (por exemplo, "en-US", "pt-BR"). Padrão é a localidade do navegador.
 * @returns Uma string formatada representando o valor monetário.
 */
export function formatCurrency(
  value: number,
  currency: string,
  locale: string = navigator.language,
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}
