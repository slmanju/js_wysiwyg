(function () {
    "use strict";
    var elements, i, length;
    
    elements = document.querySelectorAll("[data-command]");
    length = elements.length;
    
    function doCmd(event) {
        var command = event.target.getAttribute("data-command");
        document.execCommand(command, false, null);
    }
    for (i = 0; i < length; i = i + 1) {
        elements[i].addEventListener("click", doCmd, false);
    }
    
    document.getElementById("save").addEventListener("click", function () {
        var meditor = document.getElementById("meditor");
        alert(meditor.innerHTML);
    }, false);
    
    document.getElementById("font-size").addEventListener("change", function () {
        document.execCommand("fontSize", false, "1");
        var meditor = document.getElementById("meditor");
        meditor.removeAttribute("size");
        meditor.style.fontSize = this.value;
    }, false);
}());
