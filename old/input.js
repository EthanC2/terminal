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
                if (this.input.length > 0) {
                    this.input = this.input.substring(0, this.input.length - 1);
                    this.output.innerText = this.output.innerText.substring(0, this.output.length - 1);
                }
                break;

            case "Enter":
                this.execute(this.input);
                this.input = "";
                this.output.innerText += "\n";
                this.write_prompt();
                break;

            default:
                if (event.key.length == 1) {
                    this.input += event.key;
                    this.output.innerText += event.key;
                }
        }
    }   

    execute(command) {
        console.log(command);

        switch (command) {
            case "clear":
                this.input = "";
                this.output.innerText = "";
        }
    }
}

init = () => {
    let output = document.getElementById("terminal");
    let terminal = new Terminal(output, "username", "hostname");

    terminal.write_prompt();
    document.onkeydown = (event) => {
        terminal.read_keystroke(event);
    };
}

window.onload = init;