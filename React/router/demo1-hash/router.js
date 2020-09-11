class Router {
    constructor() {
        this.routers = {};
        this.currentUrl = '';
    }
    route(path, callback) {
        this.routers[path] = callback || function() {};
    }
    changeView() {
        this.currentUrl = location.hash.slice(1) || '/';
        this.route[this.currentUrl] && this.route[this.currentUrl]();
    }
    init() {
        document.addEventListener('load', this.changeView.bind(this));
        document.addEventListener('hashchange', this.changeView.bind(this));
    }
}