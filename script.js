window.onload = function() {
    toggleElements()
}

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const downloadBtn = document.getElementById("download-btn")

function updatePreview() {
    preview.innerHTML = marked.parse(editor.value);
    toggleElements()
}
function toggleElements() {
    if(editor.value.length === 0){
        preview.innerHTML = "<p><i class=\"fas fa-info-circle\"></i> If you don't know how to use Markdown, please consider visiting <a href=\"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax\">GitHubs' official documentation</a>.</p>";
    }
}

downloadBtn.addEventListener("click", function(){
    if(editor.value.length === 0){
        alert("Please input more characters!")
    }else {
        const fileText = document.getElementById("editor").value;
        const file = new Blob([fileText], {type: "text/markdown"});
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = 'README.md';
        link.click();
        downloadBtn.innerHTML = "<i class=\"fas fa-check\"></i> File Downloaded";
    }
})

//start added
document.addEventListener("DOMContentLoaded", function () {
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return decodeURIComponent(urlParams.get(name) || "");
    }

    const text = getParameterByName("text");
    const editor = document.getElementById("editor");

    if (text) {
        editor.value = text;
        editor.dispatchEvent(new Event("input", { bubbles: true }));
    }
}); 
//end added


