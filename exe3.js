function createElements(a) {


    if (!Array.isArray(a)) {
        throw "Error: parameter must be an array!"
    }
    else {
        //creem el div#container
        var container = document.createElement("div");
        container.setAttribute("id", "container");
        container.setAttribute("style", "background-color:yellow");
        document.body.appendChild(container);
        
        //creem els elements del array
        for (var i in a) {          //(var i = 0; i < a.length; i++) 
            if (typeof(a[i]) != "string")
                throw "Error: element index " + i + " must be a string";
            var element = document.createElement(a[i]);
            element.innerHTML = "Lorem ipsum dolor sit."
            container.appendChild(element);
        }
    }

}

var prova = ['div', 'h2', 'p', 'a', 'h1'];

createElements(prova);