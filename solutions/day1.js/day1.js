// Ensure ar length is within the expected bound
// Calculate then return the sum

function simpleArraySum(ar) {
  let sum = 0
  if (ar.length > 1000) return

  ar.map((num) => (sum += num))
  return sum
}

testValues=[
  [1,2,3],
  [1,2,3,4,10,11]
]

testValues.map(arr => {
  console.log(`${arr}: Answer = ${simpleArraySum(arr)}`)
})
