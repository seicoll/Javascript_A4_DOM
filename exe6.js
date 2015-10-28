'use strict';


var test = [
      ['div', 'container', [
            ['div', 'header', [
                  ['h1', '', 'Hello World!']
            ]],
            ['div', 'body', [
                  ['p', '', 'lorem'],
                  ['p', '', 'lorem']
            ]]
      ]]
];

//var test = [['div','container',[['div','header',[['h1','','Hello, World!']]],['div','body',[['p','','lorem'],['p','',[['div','container',[['div','header',[['h1','','Hello, World!']]],['div','body',[['p','','lorem'],['p','','lorem']]]]]]]]]]]];
//var test = [['div','container',[['h1','','Mauro mola']]],['p','','La recursivitat em posa caxondo 2']]

function build(a, element) {
      if (typeof(element) === "undefined")
            var element = document.body;
      for (var i = 0; i < a.length; i++) {
            var nouElement = document.createElement([a[i][0]]);
            element.appendChild(nouElement);
            if (a[i][1] != "")
                  nouElement.setAttribute('id', a[i][1]);
            if (Array.isArray(a[i][2])) {
                  build(a[i][2], nouElement);
            }
            else {
                  nouElement.innerHTML = a[i][2];
            }
      }

}

build(test);