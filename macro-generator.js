document.addEventListener("DOMContentLoaded", function() {
    const addTextBoxButton = document.getElementById("add-text-box");
    const abilityListContainer = document.getElementById("text-boxes");
    const generateMacroButton = document.getElementById("generate-macro");
    const macroOutput = document.getElementById("macro-output");
    const copyToClipboardButton = document.getElementById("copy-to-clipboard");


    const buttonModText = ["shift", "alt", "ctrl", "???"]
    addTextBoxButton.addEventListener("click", function() {
        // Create a new text box element
        const textBox = document.createElement("div");
        textBox.classList.add("text-box");

        // Create three buttons with three states
        const buttonTexts = ["Shift", "Alt", "Ctrl", "Help/Harm"]
        for (let i = 0; i < 4; i++) {
            const button = document.createElement("button");
            button.textContent = `${buttonTexts[i]}`;
            button.classList.add("btn", "neutral"); // Initial state
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

        // Create a "Remove" button
        const removeButton = document.createElement("button");
		removeButton.classList.add("btn", "btn-danger");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            removeRow(textBox);
        });
        textBox.appendChild(removeButton);

        // Add the text box to the container
        abilityListContainer.appendChild(textBox);

    });

    generateMacroButton.addEventListener("click", function() {
        var abilities = abilityListContainer.getElementsByClassName("text-box")
        var macro = "#showtooltip\n/cast "
        for (i=0; i<abilities.length; ++i) {
            macro += "[@mouseover"
            const textBox = abilities[i];
            const ability = textBox.querySelector("input").value
            const buttons = textBox.querySelectorAll("button");
            for (let i = 0; i < 3; i++) {
                const button = buttons[i];
                const mod = buttonModText[i];
                if (button.classList[1] == "active") {
                    macro += `,mod:${mod}`
                }
                else if (button.classList[1] == "inactive") {
                    macro += `,nomod:${mod}`
                }
            }
            const button = buttons[3];
            if (button.classList[1] == "active") {
                macro += `,help`
            } else if (button.classList[1] == "inactive") {
                macro += `,harm`
            }
            macro += `]${ability}`
            if (i < abilities.length-1) {
                macro += ';'
            }
        }

        macroOutput.value = macro;
    });

    copyToClipboardButton.addEventListener("click", function() {
        const clonedMacro = macroOutput.cloneNode();
        // clonedMacro.select();
        macroOutput.select()
        document.execCommand("copy");
        // window.getSelection().removeAllRanges();
    });
});

function toggleState(button) {
     const states = ["neutral", "active", "inactive"];
     const currentState = button.classList[1];
     const currentIndex = states.indexOf(currentState);
     const nextIndex = (currentIndex + 1) % states.length;
     const nextState = states[nextIndex];
     button.classList.remove(currentState);
     button.classList.add(nextState);
}

function removeRow(row) {
    // Remove the associated row when the "Remove" button is clicked
    row.remove();
}
