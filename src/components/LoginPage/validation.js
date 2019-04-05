export const validateEmail = email => {
  const emailMathcer = /\S+@\S+\.\S+/y
  return emailMathcer.test(email)
}

export const validatePassword = password => {
  const passwordMatcher = /[a-zA-Z0-9]{6,}/
  return passwordMatcher.test(password)
}

export const validationMessages = {
  email: 'really? thats you email?',
  password: 'be safe min 6 chars duuude',
}
