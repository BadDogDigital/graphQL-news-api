const {RESTDataSource} = require('apollo-datasource-rest');

const _api_key = '37e8b8afa735849c8e86256f0e728661';

class MediaStackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://gnews.io/api/v4/';
    }
    ////////////////
    //Send Intercept
    willSendRequest(request) {
        request.params.set('token', _api_key);
        //would be find say q and change to query
        //We can take a input here and conform it to our expected query
    }
    //////////////////////////
    //Request / Responses
    async search(args) {
        const data = await this.get('search', {
            ...args
        });

        return {
            status: '200 - Status Okay',
            totalArticles: data.totalArticles,
            articles: this.createArticles(data.articles)
        }; 
    }
    async headlines(args) {
        const data = await this.get('top-headlines', {
            ...args
        });
        return {
            status: '200 - Status Okay',
            totalArticles: data.totalArticles,
            articles: this.createArticles(data.articles)
        }; 
    }
    ////////////////////////////////////////////////////////////
    //Response modifyers
    //put conversion somewhere / there could be more for reasons
    createArticles(articlesArray){
        return articlesArray.map((art, index) => {
            return this.createArticle(art);
        });
    }
    //pass args for language, counry, etc
    createArticle(article){
        return {

            title: article.title,

            description: article.description,

            content: article.content,

            url: article.url,

            image: article.image,

            published: article.publishedAt,

            source: this.createSource(article.source)
        };
    }
    createSource(src){
        return {
            publication: src.name,
            author: src.name,
            url: src.url
        };
    }
    
}
module.exports = MediaStackAPI;