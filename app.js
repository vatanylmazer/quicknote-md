const markdownInput = document.getElementById("markdownInput");
const previewOutput = document.getElementById("previewOutput");

// Kayıtlı not varsa yükle, yoksa örnek metin koy
const savedMarkdown = localStorage.getItem("quickNoteContent");
if (savedMarkdown) {
    markdownInput.value = savedMarkdown;
    previewOutput.innerHTML = marked.parse(savedMarkdown);
} else {
    markdownInput.value = "# Merhaba!\n\nSol tarafa istediğin **Markdown** kodunu yaz, sağda anında canlı önizlemesini gör.\n\n- Madde 1\n- Madde 2";
    previewOutput.innerHTML = marked.parse(markdownInput.value);
}

// Canlı çeviri ve LocalStorage'a kaydetme
markdownInput.addEventListener("input", () => {
    const text = markdownInput.value;
    previewOutput.innerHTML = marked.parse(text);
    localStorage.getItem("quickNoteContent", text);
    localStorage.setItem("quickNoteContent", text);
});