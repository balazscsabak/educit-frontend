import { GA_TRACKING_ID } from './constans'

export const getKeyByIdFromObj = (obj, val) => {
  return Object.keys(obj).find((key) => {
    return obj[key].id === val
  })
}

// Shorten a string to less than maxLen characters without truncating words.
export function shortenString(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str
  return str.substr(0, str.lastIndexOf(separator, maxLen))
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
