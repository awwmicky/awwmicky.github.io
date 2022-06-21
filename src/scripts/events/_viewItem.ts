import { RESUME, APPOINTMENT } from '../constants'
import { redirect } from '../utilities'

const viewItem = (e: MouseEvent): void => {
  const btn = e.target as HTMLButtonElement
  
  switch (btn.dataset.id) {
    case 'projects':
      window.location.href = '/#projects'
    break;
    case 'contact':
      window.location.href = '/#contact'
    break;
    case 'resume':
      redirect(RESUME, '_blank')
    break;
    case 'appointment':
      redirect(APPOINTMENT, '_blank')
    break;
    default: 
      console.warn(`${ btn.dataset.id } - not an option`)
    break;
  }
}

export { viewItem }