const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        news_mediastack: (_, args, {dataSources}) => {
            console.log("here?");
            return dataSources.MediaStackAPI.news_mediastack(args);
        },
        sources_mediastack: (_, args, {dataSources}) => {
            return dataSources.MediaStackAPI.sources_mediastack(args);
        }

        
    }
};
module.exports = resolvers;