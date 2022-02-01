const htmlDoc = `
<body>
<h1>Задание:</h1>
<h3>Написать алгоритм и функцию getPath()</h3>
<h4 id="testId1">
  Header
</h4>
<div id="testId2">
  <ul id="testId3">
    <li class="class-test">a</li>
    <li><p>B</p></li>
    <li><p>C</p></li>
    <li><p>D</p></li>
    <li><p id="testId4">test</p></li> 
    <li><p class="class-test" >DD</p></li>
  </ul>
</div>
<div>OOO</div>
<div>PPP</div>
<div>SSS</div>
</body>
`;

beforeAll(() => document.body.innerHTML = htmlDoc);

const getPath = (elem) => {

  if (!elem) return '';

  var pathJS = [];

  while (elem.parentNode != null) {

    var childCount = 0;
    var childIndex = 0;

    for ( var i = 0; i < elem.parentNode.childNodes.length; i++ ) {
      var childElem = elem.parentNode.childNodes[i];
      if ( childElem.nodeName == elem.nodeName ) {
        if ( childElem === elem ) {
          childIndex = childCount;
        }
        childCount++;
      }
    }

    var nodeName = elem.nodeName.toLowerCase();
    if ( childCount > 1 ) {
      pathJS.unshift(nodeName + ':nth-of-type(' + (childIndex + 1) + ')');
    } else {
      pathJS.unshift(nodeName);
    }
    elem = elem.parentNode;
  }

  pathJS.splice(0,1);
  return pathJS.join(' > ');
}

module.exports = getPath;