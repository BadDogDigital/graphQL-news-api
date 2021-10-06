const { gql } = require('apollo-server');

const typeDefs = gql`

    "What would be the difference having all extend though - "
    type Query {
        "Archive news search default just country I think"
        search_currents(
            language: String,
            keywords: String,
            country: String,
            category: String,
            start_date: String,
            end_date: String
        ): CurrentsSearchReturn
        "latest news search in given language - default en"
        latestnews_currents(
            language: String
        ): CurrentsSearchReturn
        "returns for available filters"
        currents_languages: CurrentsLanguagesReturn
        currents_regions: CurrentsRegionsReturn
        currents_categories: CurrentsCategoryReturn
    }

    type CurrentsSearchReturn {
        status: String
        news: [CurrentsArticle!]
    }

    """Should be an ArticleStub say used by all"
    "ArticleStub, ArticleCard, ArticleIntro, Article"""
    type CurrentsArticle {
        id: String
        title: String
        description: String
        url: String
        author: String
        image: String
        language: String
        category: [String]
        published: String
    }

    type CurrentsLanguagesReturn {
        languages: String
        description: String
        status: String
    }
    type CurrentsRegionsReturn {
        regions: String
        description: String
        status: String
    }
    type CurrentsCategoryReturn {
        categories: [String]
        description: String
        status: String
    }
`;

module.exports = typeDefs;