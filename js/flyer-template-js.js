// Initialize the editor when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEditor();
});

function initializeEditor() {
    // Initialize color swatches
    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            const color = this.style.backgroundColor;
            // Here you would implement the color application logic
            console.log('Selected color:', color);
        });
    });

    // Initialize tool buttons
    const toolButtons = document.querySelectorAll('.tool-button');
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolType = this.textContent;
            handleToolClick(toolType);
        });
    });

    // Initialize template thumbnails
    const templateThumbnails = document.querySelectorAll('.template-thumbnail');
    templateThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Here you would implement the template application logic
            console.log('Selected template:', this);
        });
    });
}

function handleToolClick(toolType) {
    switch(toolType) {
        case 'Add Text':
            // Implement text addition logic
            console.log('Adding text element');
            break;
        case 'Add Shape':
            // Implement shape addition logic
            console.log('Adding shape element');
            break;
        case 'Add Image':
            // Implement image upload/addition logic
            console.log('Adding image element');
            break;
        case 'Add Icon':
            // Implement icon selection/addition logic
            console.log('Adding icon element');
            break;
    }
}

// Save functionality
const saveButton = document.querySelector('.btn-primary');
saveButton.addEventListener('click', function() {
    // Implement save logic
    console.log('Saving design...');
});
