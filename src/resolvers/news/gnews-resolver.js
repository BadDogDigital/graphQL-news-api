const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        gnews_search: (_, args, {dataSources}) => {
            console.log("here?");
            return dataSources.GNewsAPI.search(args);
        },
        gnews_headlines: (_, args, {dataSources}) => {
            return dataSources.GNewsAPI.headlines(args);
        }
    }
};
module.exports = resolvers;