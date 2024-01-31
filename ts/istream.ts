type KeyboardEventHandler = (((this: GlobalEventHandlers, ev: KeyboardEvent) => any) & ((this: Window, ev: KeyboardEvent) => any)) | null;

class IStream {
    buffer: Array<String>;
    prompt: String;

    constructor(prompt: String, keyboard_event: KeyboardEventHandler) {
        keyboard_event = this.read_key;
        this.prompt = prompt;
        this.buffer = new Array<String>();
    }

    read_key(event: KeyboardEvent): void {
        this.buffer.push(event.key);
        console.log(this.buffer.join(","));
    }
}

export default IStream;