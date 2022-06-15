// import { print } from '../utilities'

const viewItem = (e: MouseEvent) => {
  e.preventDefault()
  const btn = e.target as HTMLButtonElement
  // print(btn.id)

  switch (btn.id) {
    case 'view-work':
      window.location.href = '/#projects'
    break;
    case 'view-resume-1':
    case 'view-resume-2':
      const linkToResume = 'https://rebrand.ly/michael-f-alvarez__resume'
      window.open(linkToResume, '_blank')
    break;
    case 'view-contact':
      const linkToEmail = 'm-f-alvarez@outlook.com'
      window.location.href = `mailto:${linkToEmail}`
    break;
    default: break;
  }
}

export { viewItem }