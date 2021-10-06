const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        search_currents: (_, args, {dataSources}) => {
            console.log("here?");
            return dataSources.CurrentsAPI.search_currents(args);
        },
        latestnews_currents: (_, args, {dataSources}) => {
            return dataSources.CurrentsAPI.latestnews_currents(args);
        },

        currents_languages: (_, __, {dataSources})=>{
            return dataSources.CurrentsAPI.availableLanguages();
        },
        currents_regions: (_, __, {dataSources})=>{
            return dataSources.CurrentsAPI.availableRegions();
        },
        currents_categories: (_, __, {dataSources})=>{
            return dataSources.CurrentsAPI.availableCategories();
        },
    }
};
module.exports = resolvers;