  var body = document.querySelector('body');
  body.innerHTML = '';
  var newContent = document.createElement('p');
  var text = document.createTextNode('Chào bạn, mình đã thay đổi body của web');
  newContent.appendChild(text);
  body.appendChild(newContent);
