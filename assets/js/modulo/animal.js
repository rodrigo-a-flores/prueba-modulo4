class Animal {
    constructor(name, age, images, comments, sound) {
        this._name = name;
        this._age = age;
        this._images = images;
        this._comments = comments;
        this._sound = sound;
        
    }

    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get images() {
        return this._images;
    }
    get comments() {
        return this._comments;
    }
    get sound() {
        return this._sound;
    }
    set comments(comments) {
        this._comments = comments;
    }
}

export default Animal