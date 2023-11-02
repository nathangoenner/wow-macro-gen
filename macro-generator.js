document.addEventListener("DOMContentLoaded", function() {
    const generateMacroButton = document.getElementById("generate-macro");
    const macroOutput = document.getElementById("macro-output");
    const copyToClipboardButton = document.getElementById("copy-to-clipboard");
    const abilityList = document.getElementById("ability-list");

    generateMacroButton.addEventListener("click", function() {
        // const selectedAbility = abilitySelect.options[abilitySelect.selectedIndex].text;
        // const selectedModifier = modifierSelect.value;

        // let macro = `/cast ${selectedAbility}`;
        // if (selectedModifier) {
        //     macro = `#${selectedModifier} ${macro}`;
        // }

        // macroOutput.value = macro;
        const li = document.createElement("li");
        li.textContent = macro;
        abilityList.appendChild(li);
    });

    copyToClipboardButton.addEventListener("click", function() {
        macroOutput.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    });

    // Initialize jQuery UI Sortable for the ability list
    $(function() {
        $("#ability-list").sortable();
        $("#ability-list").disableSelection();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const addTextBoxButton = document.getElementById("add-text-box");
    const textBoxesContainer = document.getElementById("text-boxes");

    addTextBoxButton.addEventListener("click", function() {
        // Create a new text box element
        const textBox = document.createElement("div");
        textBox.classList.add("text-box");

        // Create three buttons with three states
        const buttonNames = ["Shift", "Alt", "Ctrl", "Help/Harm"]
        for (let i = 0; i < 4; i++) {
            const button = document.createElement("button");
            button.textContent = `${buttonNames[i]}`;
            button.classList.add("neutral"); // Initial state
            button.addEventListener("click", function() {
                toggleState(button);
            });
            textBox.appendChild(button);
        }

        // Create an input element for the text
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter text";

        // Add the select and input to the text box
        textBox.appendChild(input);

        // Add the text box to the container
        textBoxesContainer.appendChild(textBox);
    });
});

function toggleState(button) {
    const states = ["neutral", "active", "inactive"];
    const currentState = button.classList[0];
    const currentIndex = states.indexOf(currentState);
    const nextIndex = (currentIndex + 1) % states.length;
    const nextState = states[nextIndex];
    button.classList.remove(currentState);
    button.classList.add(nextState);
}
