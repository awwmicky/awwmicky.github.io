import { $ } from '../utilities'
// { $, $$, print }

export const $workBtn = $<HTMLButtonElement>('[data-id="projects"]')
export const $contactBtn = $<HTMLButtonElement>('[data-id="contact"]')
export const $resumeBtn = $<HTMLButtonElement>('[data-id="resume"]')
export const $appointmentBtn = $<HTMLButtonElement>('[data-id="appointment"]')

export const $emailLink = $<HTMLButtonElement>('.email-link')
export const $phoneLink = $<HTMLButtonElement>('.phone-link')

export const $toggleControl = $<HTMLInputElement>('#checkbox')