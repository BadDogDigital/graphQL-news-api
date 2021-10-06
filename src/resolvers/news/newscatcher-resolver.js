const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        news_newscatcher: (_, args, {dataSources}) => {
            return dataSources.NewsCatcherAPI.news(args);
        },
        headlines_newscatcher: (_, args, {dataSources}) => {
            return dataSources.NewsCatcherAPI.headlines(args);
        },
        sources_newscatcher: (_, args, {dataSources}) => {
            return dataSources.NewsCatcherAPI.sources(args);
        }
        
    }
};
module.exports = resolvers;