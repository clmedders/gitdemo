
// get checkbox field 
// const checkBox = document.getElementById('[id="show-password"]')
// console.log(checkBox)

// get password fields 
// console.log(passWord)


// write function to allow passwords to show when checkbox is clicked 

document.addEventListener('click', function (event) {
  if (event.target.matches('[data-box]')) {
   console.log('yes')

  const checkBox = event.target.getAttribute('data-box');
  const passWords = document.querySelectorAll('[data-type="passWord"]')

  passWords.forEach(function (passWord) {
  if (event.target.checked) {
    passWord.type = 'text'
  } else {
    passWord.type = 'password'
  }
    })
} else {
  console.log('no')
}
});


