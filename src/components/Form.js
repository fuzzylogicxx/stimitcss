export default class BaseValueForm {

    constructor(_element) {
        this.element = _element;
        this.message = "Doing Something";
    }
    
    doSomething() {
        console.log(this.message);
    }
}