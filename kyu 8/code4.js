function solution(str){
  let arr = str.split("")
  arr.reverse()
  let reverse = arr.join('')
  return reverse
}

console.log(solution("world"))