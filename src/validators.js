const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const urlRegex = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i

export const validateName = (name) => {
  if (!name) return false

  return name.length >= 3 && name.length <= 30;
}

export const validateEmail = (email) => {
  if (!email) return false

  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  if (!phone) return false

  if (['0', '1'].includes(phone[0])) return false

  if (phone.length === 10) return true

  return false
}

export const validateUrl = (url) => {
  if (!url) return false

  return urlRegex.test(url);
}