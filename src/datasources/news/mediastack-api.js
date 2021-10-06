//64f63dc6a2e602168b68b93e16deac4a

//this actually looks the best but everything so far looks skewed towards right wing nonsense  
const {RESTDataSource} = require('apollo-datasource-rest');

const _api_key = '64f63dc6a2e602168b68b93e16deac4a';

class MediaStackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://api.mediastack.com/v1/';
    }
    willSendRequest(request) {
        request.params.set('access_key', _api_key);
    }
    news_mediastack(args) {
        return this.get('news', {
            ...args
        });
    }

    sources_mediastack(args) {
        return this.get('sources', {
            ...args
        });
    }
    
}
module.exports = MediaStackAPI;