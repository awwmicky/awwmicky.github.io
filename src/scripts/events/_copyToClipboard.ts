// import { print } from '../utilities'

// DOMEvent<HTMLButtonElement>
// interface DOMEvent<T extends EventTarget> extends Event {
//   target: T
// }

interface CopyEvent {
  preventDefault: () => void
  clipboardData: any
  // DataTransfer | ClipboardEvent | Navigator
}

// e: MouseEvent + HTMLButtonElement
export default function copyToClipboard (e: MouseEvent) {
  const DISABLED: string = 'disabled'
  const SUCCESS: string = 'success'
  const TIME: number = 1200
  
  const ctaBtn = e.target as HTMLButtonElement
  // print(ctaBtn.textContent)
  const label = ctaBtn.querySelector('span') as HTMLSpanElement
  const originalText = label.textContent

  const copyHandler = (ev: CopyEvent) => {
    ev.preventDefault()
    ev.clipboardData.setData('text/plain', ctaBtn.value)
  }
  
  const resetChange = () => {
    document.removeEventListener('copy', copyHandler)
    label.textContent = originalText
    ctaBtn.classList.remove(SUCCESS)
    ctaBtn.removeAttribute(DISABLED)
  }

  if (!ctaBtn.getAttribute(DISABLED)) {
    document.addEventListener('copy', copyHandler)
    document.execCommand('copy')
    label.textContent = 'Copied!'
    ctaBtn.classList.add(SUCCESS)
    ctaBtn.setAttribute(DISABLED, '') 
    setTimeout(resetChange, TIME)
  }
}