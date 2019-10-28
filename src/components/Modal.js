export default class Modal {

    constructor(_element) {
        this.element = _element;
        this.message = "Doing Something";
    }
    
    doSomething() {
        console.log(this.message);
    }
}