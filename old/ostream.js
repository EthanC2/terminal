class OStream {
    constructor(output_element) {
        this.output_element = output_element;
    }

    write(string) {
        this.output_element.innerText += '';
    }
}