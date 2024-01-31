class IStream {
    constructor(prompt, keyboard_event) {
        keyboard_event = this.read_key;
        this.prompt = prompt;
        this.buffer = new Array();
    }
    read_key(event) {
        this.buffer.push(event.key);
        console.log(this.buffer.join(","));
    }
}
export default IStream;
