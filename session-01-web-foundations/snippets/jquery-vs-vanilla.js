// jQuery (legacy style — you'll still see this in older codebases)
// $('#title').text('Hello');
// $('.box').addClass('active');
// $('#btn').on('click', function () { ... });

// Modern vanilla JavaScript (what we use in this course)
document.querySelector('#title').textContent = 'Hello';
document.querySelector('.box').classList.add('active');
document.querySelector('#btn').addEventListener('click', function () {
  console.log('clicked!');
});
