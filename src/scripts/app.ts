import { 
  $workBtn,
  $resumeBtn,
  $contactBtn,
  $appointmentBtn,
  $emailLink, 
  $phoneLink,
} from './constants'
import { 
  viewItem, 
  contactOutput, 
} from './events'

$workBtn.addEventListener('click', viewItem)
$resumeBtn.addEventListener('click', viewItem)
$contactBtn.addEventListener('click', viewItem)
$appointmentBtn.addEventListener('click', viewItem)

$emailLink.addEventListener('click', contactOutput)
$phoneLink.addEventListener('click', contactOutput)
