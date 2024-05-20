//STEP 1
/*
  let month = parseInt(prompt('Enter a month (1-12)'))
  let year = parseInt(prompt('Enter a year'))
  let days = new Date(year, month, 0).getDate()
  console.log(days)
*/
//STEP 2
/*
  let date = prompt('Enter a date (YYYY-MM-DD)')
  let d = new Date(date)
  let month = d.getMonth()
  let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  console.log(monthName[month])
*/
//STEP 3
/*
  let date = prompt('Enter a date (YYYY-MM-DD)')
  let d = new Date(date)
  let day = d.getDay()
  if (day === 0 || day === 6) {
    console.log('It`s the weekend!')
  } else {
    console.log('It is not the weekend')
  }
*/
//STEP 4
/*
  let d = new Date()
  d.setDate(d.getDate() - 1)
  let dayOfWeek = d.getDay()
  let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  console.log(dayNames[dayOfWeek])
*/
//STEP 5
/*
  let d = new Date()
  let day = d.getDay() 
  let dayName = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  console.log(dayName[day])
*/