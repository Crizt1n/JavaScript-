weekdays=['mon','tue','wed']
console.log(weekdays)

// using push method
weekdays.push('thur')
console.log(weekdays);

//using unshift method
weekdays.unshift('sun')
console.log(weekdays);

// adding  more than one values
weekdays.push('fri','sat')
console.log(weekdays);

// for removing items using pop(removes the last item from the array)
weekdays.pop()
console.log(weekdays);

//for removing items using shift(removes first item in the array)
weekdays.shift()
console.log(weekdays);