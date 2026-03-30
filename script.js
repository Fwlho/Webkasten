document.getElementById('preview').addEventListener('click', function() {
    const title = document.getElementById('title').value || 'My Website';
    const header = document.getElementById('header').value || 'Welcome';
    const content = document.getElementById('content').value || 'No content yet';
    
    document.getElementById('preview-title').textContent = title;
    document.getElementById('preview-header').textContent = header;
    document.getElementById('preview-content').textContent = content;
});

// Auto-save to localStorage
document.getElementById('title').addEventListener('input', autoSave);
document.getElementById('header').addEventListener('input', autoSave);
document.getElementById('content').addEventListener('input', autoSave);

function autoSave() {
    const data = {
        title: document.getElementById('title').value,
        header: document.getElementById('header').value,
        content: document.getElementById('content').value
    };
    localStorage.setItem('webkasten', JSON.stringify(data));
}

// Load from localStorage on page load
window.addEventListener('load', function() {
    const saved = localStorage.getItem('webkasten');
    if (saved) {
        const data = JSON.parse(saved);
        document.getElementById('title').value = data.title || '';
        document.getElementById('header').value = data.header || '';
        document.getElementById('content').value = data.content || '';
    }
});