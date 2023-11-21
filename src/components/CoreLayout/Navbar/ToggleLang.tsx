import type { LANG as ALL_LANG } from '@/constants'

import { IconCountryFlag } from '@/components/IconCountryFlag'
import { DropdownInput } from '@/components/Input'
import { LANG_LABEL } from '@/constants'
import { useLang } from '@/hooks'

type LANG = (typeof ALL_LANG)[keyof typeof ALL_LANG]

export const ToggleLang = () => {
  const { lang, toggleLang } = useLang()

  return (
    <DropdownInput
      ariaLabel='Lang Actions'
      mode='single'
      disallowEmptySelection
      selectedKeys={[lang]}
      onSelected={(key) => toggleLang(key as LANG)}
      items={[...LANG_LABEL].map((allLang) => ({
        ...allLang,
        startContent: <IconCountryFlag lang={allLang.key} className='mx-3' />,
      }))}
    >
      <div className='cursor-pointer'>
        <IconCountryFlag lang={lang} className='mx-3' />
      </div>
    </DropdownInput>
  )
}
