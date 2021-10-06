const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        everything_newsapi: (_, args, {dataSources}) => {
            return dataSources.newsAPI.everything(args);
        },
        headlines_newsapi: (_, args, {dataSources}) => {
            return dataSources.newsAPI.headlines(args);
        },
        sources_newsapi: (_, args, {dataSources}) => {
            return dataSources.newsAPI.sources(args);
        }

        
    }
};
module.exports = resolvers;