function update()
{
    var idoc = document.getElementById('iframe').contentWindow.document;

    idoc.open();
    idoc.write(editor.getValue());
    idoc.close();
}

function setupEditor()
{
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
<html>
<head>
    <title>TextSpace</title>
    <style>
        html, body { margin: 0; padding: 0; }
        body { background: #212121; }
        h1, p { font-family: 'Montserrat', sans-serif; color: #fff; }
        h1 {  font-size: 30px; }
            p {  font-size: 20px; }
    </style>
</head>
<body>
    <h1>This is my first HTML web app using TextSpace!</h1>
    <p>Yay! You can delete me if you want.</p>
</body>
</html>`, 1); //1 = moves cursor to end

      editor.getSession().on('change', function() {
        update();
      });

      editor.focus();

      editor.setOptions({
        fontSize: "16pt",
        showLineNumbers: true,
        showGutter: true,
        vScrollBarAlwaysVisible: false,
        enableBasicAutocompletion: false, enableLiveAutocompletion: false
      });

      editor.setShowPrintMargin(false);
      editor.setBehavioursEnabled(false);
}

function ready() {
    setupEditor();
    update();
}