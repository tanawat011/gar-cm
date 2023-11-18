import { getAllPossibleWordPermutations } from './getAllPossibleWordPermutations'

describe('getAllPossibleWordPermutations', () => {
  test.each([
    ['A', ['A']],
    ['B', ['B']],
    ['AB', ['AB', 'BA']],
    ['ABC', ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']],
    [
      'ABCD',
      [
        'ABCD',
        'ABDC',
        'ACBD',
        'ACDB',
        'ADBC',
        'ADCB',
        'BACD',
        'BADC',
        'BCAD',
        'BCDA',
        'BDAC',
        'BDCA',
        'CABD',
        'CADB',
        'CBAD',
        'CBDA',
        'CDAB',
        'CDBA',
        'DABC',
        'DACB',
        'DBAC',
        'DBCA',
        'DCAB',
        'DCBA',
      ],
    ],
  ])('should corrected %s', (word, expected) => {
    const result = getAllPossibleWordPermutations(word)
    expect(result).toEqual(expected)
  })
})
