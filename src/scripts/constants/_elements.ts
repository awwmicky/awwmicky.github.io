import { $ } from '../utilities'
// { $, $$, print }

export const $heroResumeBtn = $<HTMLButtonElement>('#hero [data-id="resume"]')
export const $heroEmailBtn = $<HTMLButtonElement>('#hero [data-id="contact"]')
export const $aboutResumeBtn = $<HTMLButtonElement>('#about [data-id="resume"]')
export const $aboutScheduleBtn = $<HTMLButtonElement>('#about [data-id="appointment"]')

export const $emailLink = $<HTMLButtonElement>('.email-link')
export const $phoneLink = $<HTMLButtonElement>('.phone-link')

export const $toggleControl = $<HTMLInputElement>('#checkbox')