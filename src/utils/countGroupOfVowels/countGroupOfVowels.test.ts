import { countGroupOfVowels } from './countGroupOfVowels'

describe('countGroupOfVowels', () => {
  test.each([
    ['beautiful', 3],
    ['developer', 4],
    ['software', 3],
    ['engineer', 3],
    ['data', 2],
    ['software engineer', 6],
    ['BEAUTIFUL', 3],
    ['DEVELOPER', 4],
    ['SOFTWARE', 3],
    ['ENGINEER', 3],
    ['DATA', 2],
    ['SOFTWARE ENGINEER', 6],
  ])('should corrected for wording "%s"', (word, expected) => {
    const result = countGroupOfVowels(word)
    expect(result).toEqual(expected)
  })
})
