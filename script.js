document.addEventListener('DOMContentLoaded', () => {
    // --- Text Content Manipulation ---
    const textElement = document.getElementById('dynamic-text');
    const changeTextButton = document.getElementById('change-text-button');

    changeTextButton.addEventListener('click', () => {
        textElement.textContent = 'The text has been dynamically changed with a splash of color!';
        textElement.style.color = '#ff6b6b'; // Add color
        textElement.style.fontSize = '1.2em'; // Increase font size
        textElement.style.fontStyle = 'italic'; // Make it italic
        textElement.style.backgroundColor = '#ffe0e0'; // Add a background color
        textElement.style.padding = '5px'; // Add some padding
        textElement.style.borderRadius = '3px'; // Add rounded corners
    });

    // --- CSS Style Modification ---
    const styledElement = document.getElementById('styled-element');
    const changeStyleButton = document.getElementById('change-style-button');
    let isOriginalStyle = true; // Track if the element has the original style

    changeStyleButton.addEventListener('click', () => {
        if (isOriginalStyle) {
            styledElement.style.backgroundColor = 'lightgreen';
            styledElement.style.color = 'darkgreen';
            styledElement.style.fontWeight = 'bold';
            styledElement.style.padding = '20px';
            styledElement.style.border = '2px dashed green'; // Change to dashed border
            styledElement.style.boxShadow = '5px 5px 10px rgba(0, 128, 0, 0.3)'; // Add a shadow
            styledElement.style.transition = 'all 0.5s ease-in-out'; // Add a transition
            isOriginalStyle = false;
        } else {
            // Revert to the original styles (or some other style)
            styledElement.style.backgroundColor = 'lightblue';
            styledElement.style.color = 'black';
            styledElement.style.fontWeight = 'normal';
            styledElement.style.padding = '10px';
            styledElement.style.border = '1px solid blue';
            styledElement.style.boxShadow = 'none';
            isOriginalStyle = true;
        }
    });

    // --- Adding and Removing Elements ---
    const elementContainer = document.getElementById('element-container');
    const addElementButton = document.getElementById('add-element-button');
    const removeElementButton = document.getElementById('remove-element-button');
    let elementCount = elementContainer.children.length; // Initial number of elements

    addElementButton.addEventListener('click', () => {
        const newParagraph = document.createElement('p');
        newParagraph.classList.add('dynamic-element');
        newParagraph.textContent = `Dynamically added element #${++elementCount}`;
        newParagraph.style.backgroundColor = '#f9f9f9'; // Style new elements
        newParagraph.style.padding = '10px';
        newParagraph.style.borderRadius = '4px';
        newParagraph.style.borderLeft = '5px solid #007bff'; // Add a left border
        elementContainer.appendChild(newParagraph);
    });

    removeElementButton.addEventListener('click', () => {
        if (elementContainer.lastElementChild) {
            const removedElement = elementContainer.lastElementChild;
            removedElement.style.opacity = '0.5'; // Briefly reduce opacity before removal
            removedElement.style.transition = 'opacity 0.3s ease-in-out';
            setTimeout(() => {
                elementContainer.removeChild(removedElement);
                elementCount--;
            }, 300); // Remove after the transition
        } else {
            alert('No more elements to remove!');
        }
    });

    // --- Responding to User Input ---
    const nameInput = document.getElementById('name-input');
    const greetingOutput = document.getElementById('greeting-output');

    nameInput.addEventListener('input', () => {
        const name = nameInput.value.trim();
        if (name) {
            greetingOutput.textContent = `Hello, ${name}! Welcome!`;
            greetingOutput.style.color = '#28a745'; // Style the greeting
            greetingOutput.style.fontWeight = 'bold';
            greetingOutput.style.marginTop = '10px';
        } else {
            greetingOutput.textContent = '';
            greetingOutput.style.color = ''; // Reset color
            greetingOutput.style.fontWeight = ''; // Reset font weight
            greetingOutput.style.marginTop = ''; // Reset margin
        }
    });
});