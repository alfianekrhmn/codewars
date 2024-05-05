function bonusTime(salary, bonus) {
  if(bonus === true){
    salary = salary * 10
    return `\u00A3${salary}`
  }else if(bonus === false){
    return `\u00A3${salary}`
  }
  }

console.log(bonusTime(100, true))
console.log(bonusTime(100, false))