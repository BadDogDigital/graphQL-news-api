//https://gnews.io/docs/v4#query-parameters
const { gql } = require('apollo-server');

const typeDefs = gql`

    "What would be the difference having all extend though - "
    type Query {
        "Archive news search default just country I think"
        gnews_search(
            q: String
            "Arabic	ar German de  Greek	el English	en Spanish	es French	fr Hebrew	he Hindi	hi Italian	it Japanese	ja Malayalam	ml Marathi	mr Dutch	nl Norwegian	no Portuguese	pt Romanian	ro Russian	ru Swedish	sv Tamil	ta Telugu	te Ukrainian uk Chinese	zh"
            lang: String
            
            country: String
            max: Int
            page: Int
            "ENUM title, description and content"
            in: String
            "ENUM description, content and image"
            nullable: String
            from: String
            to: String
            sortby: String
            expand: String
        ): ArticleResults
        "latest news search in given language - default en"
        gnews_headlines(
            q: String
            "ENUM - breaking-news, world, nation, business, technology, entertainment, sports, science and health."
            topic: String
            lang: String
            country: String
            max: Int
            page: Int
            "ENUM description, content and image"
            nullable: String
            from: String
            to: String
            expand: String



        ): ArticleResults
    }

    type GNewsSearchReturn {
        totalArticles: Int
        articles: [GNewsArticle!]
    }
    type GNewsHeadlinesReturn {
        totalArticles: Int
        articles: [GNewsArticle!]
    }
    """Should be an ArticleStub say used by all"
    "ArticleStub, ArticleCard, ArticleIntro, Article"""
    type GNewsArticle {
        title: String
        description: String
        content: String
        url: String
        image: String
        publishedAt: String
        source: GnewsSource
    }
    type GnewsSource {
        name: String
        url: String
    }
`;

module.exports = typeDefs;