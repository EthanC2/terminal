class IStream {
    constructor(event_key_press = window.onkeydown) {
        event_key_press += this.read_key;
        this.buffer = new Array();
    }

    read_key(event) {
        console.log(event.key);
    }
}