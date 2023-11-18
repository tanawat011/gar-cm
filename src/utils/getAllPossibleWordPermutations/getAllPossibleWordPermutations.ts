export const getAllPossibleWordPermutations = (word: string) => {
  if (word.length <= 1) return [word]

  const permutations = []

  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    const remainingChars = word.slice(0, i) + word.slice(i + 1)
    const charPermutations: string[] =
      getAllPossibleWordPermutations(remainingChars)

    for (const perm of charPermutations) permutations.push(char + perm)
  }

  return permutations
}

// first call with -> ABC
// loop 1 -> ABC -> char = A, remainingChars = '' + BC -> recursive call

//   loop 1 -> BC -> char = B, remainingChars = '' + C -> recursive call
//     recursive call -> C -> return [C]
//   loop 1 -> BC -> charPermutations = [C]
//     loop 1 -> [C] -> permutations.push(B + C)

//   permutations = [BC]

//   loop 2 -> BC -> char = C, remainingChars = B + '' -> recursive call
//     recursive call -> B -> return [B]
//   loop 2 -> BC -> charPermutations = [B]
//     loop 1 -> [B] -> permutations.push(C + B)

//   permutations = [BC, CB]
//   recursive call -> return [BC, CB]

// loop 1 -> ABC -> charPermutations = [BC, CB]
//   loop 1 -> [BC, CB] -> permutations.push(A + BC)
//   loop 2 -> [BC, CB] -> permutations.push(A + BC)

// permutations = [ABC, ACB]

// ******************************************

// loop 2 -> ABC -> char = B, remainingChars = A + C -> recursive call

//   loop 1 -> AC -> char = A, remainingChars = '' + C -> recursive call
//     recursive call -> C -> return [C]
//   loop 1 -> AC -> charPermutations = [C]
//     loop 1 -> [C] -> permutations.push(A + C)

//   permutations = [AC]

//   loop 2 -> AC -> char = C, remainingChars = A + '' -> recursive call
//     recursive call -> A -> return [A]
//   loop 2 -> AC -> charPermutations = [A]
//     loop 1 -> [A] -> permutations.push(C + A)

//   permutations = [AC, CA]
//   recursive call -> return [AC, CA]

// loop 2 -> ABC -> charPermutations = [AC, CA]
//   loop 1 -> [AC, CA] -> permutations.push(B + AC)
//   loop 2 -> [AC, CA] -> permutations.push(B + CA)

// permutations = [ABC, ACB, BAC, BCA]

// ******************************************

// ....................................................................................
