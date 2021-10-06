//6678781f830047f58948b531df431c51
const {RESTDataSource} = require('apollo-datasource-rest');

const _api_key = '6678781f830047f58948b531df431c51';

class NewsApiAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://newsapi.org/v2/';
    }
    willSendRequest(request) {
        request.params.set('apikey', _api_key);
    }
    everything(args) {
        return this.get('everything', {
            ...args
        });
    }

    headlines(args) {
        return this.get('top-headlines', {
            ...args
        });
    }
    sources(args){
        return this.get('top-headlines/sources', {
            ...args
        });
    }
    
}
module.exports = NewsApiAPI;