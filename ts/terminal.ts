import IStream from "./istream";
import OStream from "./ostream";

class Terminal {
    input: IStream;
    output: OStream;

    constructor() {
        this.input = new IStream("username@hostname> ", window.onkeydown);
        this.output = new OStream();
    }
}

export default Terminal;