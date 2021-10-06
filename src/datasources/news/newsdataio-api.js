//pub_9046d6d2849f183d2628556b59aeb142016
const {RESTDataSource} = require('apollo-datasource-rest');

const _api_key = 'pub_9046d6d2849f183d2628556b59aeb142016';

class NewsDataIOAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://newsdata.io/api/1/';
    }
    willSendRequest(request) {
        request.params.set('apikey', _api_key);
    }
    news(args) {
        return this.get('news', {
            ...args
        });
    }
    archive(args) {
        return this.get('news', {
            ...args
        });
    }
    sources(args) {
        return this.get('sources', {
            ...args
        });
    }
    
}
module.exports = NewsDataIOAPI;