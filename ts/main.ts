import Terminal from "./terminal";

const init = (): void => {
    const terminal = new Terminal();
    console.log(terminal);
};

window.onload = init;