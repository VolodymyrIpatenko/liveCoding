function manageClasses() {
  const selected = document.querySelector('.one').classList.add('selected');
  const remove = document.querySelector('.two').classList.remove('selected');
  const toggle = document
    .querySelector('.three')
    .classList.toggle('three_done');
  const four = document.querySelector('.four');
  if (four.classList.contains('some-class')) {
    four.classList.add('another-class');
  }
}
manageClasses();
