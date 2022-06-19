import { print, redirect, delay } from '../utilities'
import { $toggleControl } from '../constants'

interface CopyEvent {
  preventDefault: () => void
  clipboardData: any
  // DataTransfer | ClipboardEvent | Navigator
}

const DISABLED: string = 'disabled'
const SUCCESS: string = 'success'


const copyToClipboard = (value: string): void => {
  const copyHandler = (ev: CopyEvent) => {
    ev.preventDefault()
    ev.clipboardData.setData('text/plain', value)
    document.removeEventListener('copy', copyHandler)
  }

  document.addEventListener('copy', copyHandler)
  document.execCommand('copy')
}

const redirectToApp = (id: string, value: string): void => {
  const protocol = (id === 'email') ? 'mailto' : 'tel'
  redirect(`${ protocol }:${ value }`)
}


const contactOutput = (e: MouseEvent): void => {
  const isChecked = $toggleControl.checked
  const ctaBtn = e.target as HTMLButtonElement
  const label = ctaBtn.querySelector('span') as HTMLSpanElement
  const originalText = label.textContent

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
    copyToClipboard(ctaBtn.value)
  } else {
    makeChange('Redirecting.')
    redirectToApp(ctaBtn.id, ctaBtn.value)
  }
}

export { contactOutput }