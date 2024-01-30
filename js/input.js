class Terminal {
    constructor(output, username, hostname) {
        this.output = output;
        this.input = "";
        
        this.username = username;
        this.hostname = hostname;
    }

    get prompt() {
        return `${this.username}@${this.hostname}> `;
    }

    write_prompt() {
        this.output.innerText += this.prompt;
    }

    read_keystroke(event) {
        switch (event.key) {
            case "Backspace":
                this.output.innerText = this.output.innerText.slice(0, this.output.innerText.length - 1);
                break;

            case "Enter":
                this.execute(this.output.innerText);
                this.output.innerText += "\n";
                this.write_prompt();
                break;

            default:
                if (event.key.length == 1) {
                    this.output.innerText += event.key;
                }
        }
    }   
}

init = () => {
    let output = document.getElementById("terminal");
    let terminal = new Terminal(output, "username", "hostname");

    // REPL loop
    terminal.write_prompt();
    document.onkeydown = (event) => {
        terminal.read_keystroke(event);
    };
}

window.onload = init;