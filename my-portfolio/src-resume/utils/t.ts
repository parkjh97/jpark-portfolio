import ko from '../../src/i18n/locales/ko'

/**
 * i18next 없이 ko.ts 번역 키를 직접 조회
 * @example t('career.companies.qbicware.period') → "2022.10 - 2025.10 (3년)"
 */
export function t(key: string): string {
  const parts = key.split('.')
  let current: unknown = ko
  for (const part of parts) {
    if (current === null || typeof current !== 'object') return key
    current = (current as Record<string, unknown>)[part]
  }
  return typeof current === 'string' ? current : key
}
