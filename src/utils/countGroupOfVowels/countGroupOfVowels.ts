export const countGroupOfVowels = (word: string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  let count = 0
  let currentVowels = ''

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase()

    if (vowels.includes(char)) {
      if (i === word.length - 1) count++
      else currentVowels += char
    } else {
      if (currentVowels.length > 0) count++

      currentVowels = ''
    }
  }

  return count
}
