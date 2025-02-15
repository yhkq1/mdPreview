window.onload = function() {
    toggleInfo()
}

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function updatePreview() {
    preview.innerHTML = marked.parse(editor.value);
    toggleInfo()
}
function toggleInfo() {
    if(editor.value.length === 0){
        preview.innerHTML = "<p><i class=\"fas fa-info-circle\"></i> If you don't know how to use Markdown, please consider visiting <a href=\"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax\">GitHubs' official documentation</a>.</p>"
    }
}
