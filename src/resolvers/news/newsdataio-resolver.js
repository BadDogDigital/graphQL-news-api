const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        newsdataio_news: (_, args, {dataSources}) => {
            return dataSources.NewsDataIOAPI.news(args);
        },
        newsdataio_archive: (_, args, {dataSources}) => {
            return dataSources.NewsDataIOAPI.archive(args);
        },
        newsdataio_sources: (_, args, {dataSources}) => {
            return dataSources.NewsDataIOAPI.sources(args);
        }
        
    }
};
module.exports = resolvers;