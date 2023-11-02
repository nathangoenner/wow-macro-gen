document.addEventListener("DOMContentLoaded", function() {
    const abilitySelect = document.getElementById("ability-select");
    const modifierSelect = document.getElementById("modifier-select");
    const generateMacroButton = document.getElementById("generate-macro");
    const macroOutput = document.getElementById("macro-output");
    const copyToClipboardButton = document.getElementById("copy-to-clipboard");

    generateMacroButton.addEventListener("click", function() {
        const selectedAbility = abilitySelect.options[abilitySelect.selectedIndex].text;
        const selectedModifier = modifierSelect.value;

        let macro = `/cast ${selectedAbility}`;
        if (selectedModifier) {
            macro = `#${selectedModifier} ${macro}`;
        }

        macroOutput.value = macro;
    });

    copyToClipboardButton.addEventListener("click", function() {
        macroOutput.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const stateToggleButtons = document.querySelectorAll(".state-toggle");

    function toggleState(button) {
        const currentState = button.getAttribute("data-state");

        switch (currentState) {
            case "neutral":
                button.classList.remove("neutral");
                button.classList.add("active");
                button.setAttribute("data-state", "active");
                break;
            case "active":
                button.classList.remove("active");
                button.classList.add("not-active");
                button.setAttribute("data-state", "not-active");
                break;
            case "not-active":
                button.classList.remove("not-active");
                button.classList.add("neutral");
                button.setAttribute("data-state", "neutral");
                break;
        }
    }

    stateToggleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            toggleState(button);
        });
    });
});

