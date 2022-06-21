import { $toggleControl, EMAIL, PHONE } from '../constants'
import { $, redirect, delay } from '../utilities'

type ContactInfo = {
  value: string
  protocol: string
} | void

const DISABLED: string = 'disabled'
const SUCCESS: string = 'success'


const getContactInfo = (id?: string): ContactInfo => {
  if (id === 'email') return { value: EMAIL, protocol: 'mailto' }
  else if (id === 'phone') return { value: PHONE, protocol: 'tel' }
  else console.warn(`${ id } - not an option`)
}

const copyToClipboard = (value: string | undefined): void => {
  navigator.clipboard.writeText(value || '')
}

const redirectToApp = (info: ContactInfo): void => {
  redirect(`${ info?.protocol }:${ info?.value }`)
}


const contactOutput = (e: MouseEvent): void => {
  const ctaBtn = e.target as HTMLButtonElement
  const label = $<HTMLSpanElement>('span', ctaBtn)

  const originalText = label.textContent
  const isChecked = $toggleControl.checked
  const contactInfo = getContactInfo(ctaBtn.dataset.id)

  const resetChange = () => {
    label.textContent = originalText
    ctaBtn.classList.remove(SUCCESS)
    ctaBtn.removeAttribute(DISABLED)
  }

  const makeChange = (text: string = '') => {
    label.textContent = text
    ctaBtn.classList.add(SUCCESS)
    ctaBtn.setAttribute(DISABLED, '') 
    delay().then(resetChange)
  }
  
  if (ctaBtn.getAttribute(DISABLED)) return
  if (!isChecked) {
    makeChange('Copied!')
    copyToClipboard(contactInfo?.value)
  } else {
    makeChange('Redirecting.')
    redirectToApp(contactInfo)
  }
}

export { contactOutput }