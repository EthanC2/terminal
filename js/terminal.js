import IStream from "./istream";
import OStream from "./ostream";
class Terminal {
    constructor() {
        this.input = new IStream("username@hostname> ", window.onkeydown);
        this.output = new OStream();
    }
}
export default Terminal;
