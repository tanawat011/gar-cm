export const toCapital = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const snakeToCapital = (str: string) => {
  return str.replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ' ' + d.toUpperCase()))
}

export const kebabToCapital = (str: string) => {
  return str.replace(/^-*(.)|-+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ' ' + d.toUpperCase()))
}
