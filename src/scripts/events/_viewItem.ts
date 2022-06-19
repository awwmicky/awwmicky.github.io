import { redirect } from '../utilities'

const viewItem = (e: MouseEvent) => {
  e.preventDefault()
  const btn = e.target as HTMLButtonElement
  const linkToResume: string = 'https://rebrand.ly/michael-f-alvarez__resume'
  const linkToAppointment: string = 'https://calendly.com/michael-f-alvarez/meetup'
  const linkToEmail: string = 'm-f-alvarez@outlook.com'
  
  switch (btn.id) {
    case 'view-work':
      window.location.href = '/#projects'
    break;
    case 'view-resume':
      redirect(linkToResume, '_blank')
    break;
    case 'view-appointment':
      redirect(linkToAppointment, '_blank')
    break;
    case 'view-contact':
      redirect(`mailto:${linkToEmail}`)
    break;
    default: break;
  }
}

export { viewItem }