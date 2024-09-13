

// Initialize Ace editors
var htmlEditor = ace.edit("html-editor");
htmlEditor.setTheme("ace/theme/twilight");
htmlEditor.getSession().setMode("ace/mode/html");

var cssEditor = ace.edit("css-editor");
cssEditor.setTheme("ace/theme/twilight");
cssEditor.getSession().setMode("ace/mode/css");

var jsEditor = ace.edit("js-editor");
jsEditor.setTheme("ace/theme/twilight");
jsEditor.getSession().setMode("ace/mode/javascript");

function run() {
    let htmlCode = htmlEditor.getValue();
    let cssCode = cssEditor.getValue();
    let jsCode = jsEditor.getValue();
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}