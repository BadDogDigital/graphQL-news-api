//c9VPH_jbGsrQP2yRA_anuVe8IBGSZM2ZI3LkyDABhNA

//this actually looks the best but everything so far looks skewed towards right wing nonsense  
const {RESTDataSource} = require('apollo-datasource-rest');

const _api_key = 'c9VPH_jbGsrQP2yRA_anuVe8IBGSZM2ZI3LkyDABhNA';

class NewsCatcherAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.newscatcherapi.com/v2/';
    }
    willSendRequest(request) {
        request.headers.set('x-api-key', _api_key);
    }
    
    search(args) {
        return this.get('search', {
            ...args
        });
    }

    headlines(args) {
        return this.get('latest_headlines', {
            ...args
        });
    }
    sources(args){
        return this.get('sources', {
            ...args
        });
    }
    
}
module.exports = NewsCatcherAPI;