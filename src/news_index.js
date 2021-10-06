const {ApolloServer} = require('apollo-server');

//ultimately these can be loaded dynamically if we want to go that route
//Would we want to though? 
//This is straightforward if kept to a structure/cluster i.e. news or google say 
//should limit to like 10 or something? 
const baseSchema = require('./schemas/news/base-article-schema');
const newsapi_defs = require('./schemas/news/newsapi-schema'); 
const newsdataio_defs = require('./schemas/news/nesdataio-schema'); 
const newscatcher_defs = require('./schemas/news/newscatcher-schema'); 
const mediastack_defs = require('./schemas/news/mediastack-schema'); 
const currents_defs = require('./schemas/news/currentsapi-schema'); 
const gnews_defs = require('./schemas/news/gnews-schema'); 

const newsapi_resolver = require('./resolvers/news/newsapi-resolver');
const newsdataio_resolver = require('./resolvers/news/newsdataio-resolver');
const newscatcher_resolver = require('./resolvers/news/newscatcher-resolver');
const mediastack_resolver = require('./resolvers/news/mediastack-resolver');
const currents_resolver = require('./resolvers/news/currentsapi-resolver');
const gnews_resolver = require('./resolvers/news/gnews-resolver');

const NewsAPI = require('./datasources/news/newsapi-api');
const NewsDataIOAPI = require('./datasources/news/newsdataio-api');
const NewsCatcherAPI = require('./datasources/news/newscatcher-api');
const MediaStackAPI = require('./datasources/news/mediastack-api');
const CurrentsAPI = require('./datasources/news/currents-api');
const GNewsAPI = require('./datasources/news/gnews-api');

//import { merge } from 'lodash';
const _ = require('lodash');
// Note: This is also a good place to put any types that are common to each "module"
//throwing predictive export from base typeDefs
  /*const baseTypeDefs = gql`
    type Query
    type Mutation

  `;*/

  const server = new ApolloServer({
    //always have schemas extends Query or Mutation 
    typeDefs: [
      baseSchema,
      newsapi_defs, 
      newsdataio_defs, 
      newscatcher_defs, 
      mediastack_defs, 
      currents_defs,
      gnews_defs
    ],
    //resolvers: merge(resolvers, authorResolvers, bookResolvers),
    resolvers: _.merge(
      {}, 
      newsapi_resolver, 
      newsdataio_resolver, 
      newscatcher_resolver,
      mediastack_resolver, 
      currents_resolver,
      gnews_resolver
      ),
    
    dataSources: () => {
      return {
        newsAPI: new NewsAPI(),
        NewsDataIOAPI: new NewsDataIOAPI(),
        NewsCatcherAPI: new NewsCatcherAPI(),
        MediaStackAPI: new MediaStackAPI(),
        CurrentsAPI: new CurrentsAPI(),
        GNewsAPI: new GNewsAPI()
      };
    }
  });

server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
  });