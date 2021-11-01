import { 
  $workBtn,
  $resumeBtn1,
  $resumeBtn2,
  $contactBtn,
  $emailLink, 
  $phoneLink 
} from './constants/'
import { copyToClipboard, viewItem } from './events/'

$workBtn.addEventListener('click', viewItem)
$resumeBtn1.addEventListener('click', viewItem)
$resumeBtn2.addEventListener('click', viewItem)
$contactBtn.addEventListener('click', viewItem)

$emailLink.addEventListener('click', copyToClipboard)
$phoneLink.addEventListener('click', copyToClipboard)