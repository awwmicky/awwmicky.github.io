import { 
  $workBtn,
  $resumeBtn,
  $appointmentBtn,
  $contactBtn,
  $emailLink, 
  $phoneLink,
} from './constants'
import { 
  viewItem, 
  contactOutput, 
} from './events'

$workBtn.addEventListener('click', viewItem)
$resumeBtn.addEventListener('click', viewItem)
$appointmentBtn.addEventListener('click', viewItem)
$contactBtn.addEventListener('click', viewItem)

$emailLink.addEventListener('click', contactOutput)
$phoneLink.addEventListener('click', contactOutput)
