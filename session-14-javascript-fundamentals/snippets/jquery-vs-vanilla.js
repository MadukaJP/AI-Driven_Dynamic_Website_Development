// jQuery (legacy — for recognition only)
// $('#btn').on('click', function () {
//   $('.box').addClass('active');
// });

// Modern vanilla JS equivalent
document.querySelector('#btn').addEventListener('click', () => {
  document.querySelector('.box').classList.add('active');
});
