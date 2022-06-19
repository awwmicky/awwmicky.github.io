import { $ } from '../utilities'
// { $, $$, print }

export const $workBtn = $<HTMLButtonElement>('#view-work')
export const $resumeBtn = $<HTMLButtonElement>('#view-resume')
export const $appointmentBtn = $<HTMLButtonElement>('#view-appointment')
export const $contactBtn = $<HTMLButtonElement>('#view-contact')

export const $emailLink = $<HTMLButtonElement>('.email-link')
export const $phoneLink = $<HTMLButtonElement>('.phone-link')

export const $toggleControl = $<HTMLInputElement>('#checkbox')