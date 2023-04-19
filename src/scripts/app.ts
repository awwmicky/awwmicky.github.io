import { 
  $heroResumeBtn,
  $heroEmailBtn,
  $aboutResumeBtn,
  $aboutScheduleBtn,
  $emailLink, 
  $phoneLink,
} from './constants'
import { 
  viewItem, 
  contactOutput, 
} from './events'

$heroResumeBtn.addEventListener('click', viewItem)
$heroEmailBtn.addEventListener('click', viewItem)
$aboutResumeBtn.addEventListener('click', viewItem)
$aboutScheduleBtn.addEventListener('click', viewItem)

$emailLink.addEventListener('click', contactOutput)
$phoneLink.addEventListener('click', contactOutput)
