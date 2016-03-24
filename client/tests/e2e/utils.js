function Utils() {

    this.hasClass = (element, cls)=> {
        return element.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(cls) !== -1;
        });
    };
}

module.exports = Utils;
