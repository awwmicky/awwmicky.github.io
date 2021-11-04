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
      // window.open(pdf, '_blank')
      // window.open('https://www.google.com/', '_blank')
      const pdfLink = '/up_/docs/michael_f_alvarez--resume.pdf'
      window.open(pdfLink, '_blank')
    break;
    case 'view-contact':
      window.location.href = 'mailto:m-f-alvarez@outlook.com'
    break;
    default: break;
  }
}

export { viewItem }