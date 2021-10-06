const {RESTDataSource} = require('apollo-datasource-rest');

const _api_key = 'En91mCdZjp7-z6QZqA1jDFQgbMaXi-dnrriAVFL03wZOt8M6';

class CurrentsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.currentsapi.services/v1/';
    }
    willSendRequest(request) {
        request.params.set('apiKey', _api_key);
    }
    //My dude / this is all we need 
    search_currents(args) {
        return this.get('search', {
            ...args
        });
    }

    latestnews_currents(args) {
        //can only pass language but defaults to en
        //can/can't use spread
        return this.get('latest-news', {
            ...args
        });
    }

    //Okay dumbass / async await blocks THIS function
    //i.e. stop here and pick up later
    //NOT block the entire program 
    //that's the dumb misunderstanding
    async availableLanguages(){
        //return this.get('/available/languages');
        const data = await this.get('/available/languages');
        //use then for promise returns 
        return {
            languages: JSON.stringify(data.languages),
            description: data.description,
            status: data.status
        };
    }
    async availableRegions(){
        //return this.get('/available/regions');
        const data = await this.get('/available/regions');
        //use then for promise returns 
        return {
            regions: JSON.stringify(data.regions),
            description: data.description,
            status: data.status
        };
    }
    availableCategories(){
        return this.get('/available/categories');
    }
    
}
module.exports = CurrentsAPI;