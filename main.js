const str = `
010-1234-5678
ITBlue@tistory.com
The quick brown fox jumps over the lazy dog.
abbccccdddd
quicks:
동해물과_백두산이 마르고 닳도록
`

console.log(
  str.match(/(?<=@).{1,}/g)
)
