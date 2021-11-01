import { print } from '../utilities'
// import pdf from '../../docs/michael_fred_alvarez-resume.pdf'
// print(pdf)

export default function viewItem (e: MouseEvent) {
  e.preventDefault()
  const btn = e.target as HTMLButtonElement
  // print(btn.id)

  switch (btn.id) {
    case 'view-work':
      window.location.href = '/#projects'
    break;
    case 'view-resume-1':
    case 'view-resume-2':
      // window.open(pdf, '_blank')
      window.open('https://www.google.com/', '_blank')
    break;
    case 'view-contact':
      window.location.href = 'mailto:michael_fred_alvarez@yahoo.com'
    break;
    default: break;
  }
}