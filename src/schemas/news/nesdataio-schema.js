const { gql } = require('apollo-server');

//perhaps more of a generic news achema
//we could create a schema per api
//seems like best would be to form responses TO required api

const typeDefs = gql`
    "is this correct?"
    type Query {

        "Current News search"
        newsdataio_news(
            "us gb in jp ae sa au ca sg"
            country: String
            "top business science technology sports health entertainment"
            category: String
            "en ar jp in es fr"
            language: String
            "use sources comma delim max of5"
            domain: String
            "url encoded keyword search"
            q: String
            "Cannot be used with q"
            qInTitle: String
            "Use this to page through the results if the total results found is greater than the page size."
            page: Int

        ): NewsDataIOResponse!
        "Archival news search - back ... years"
        newsdataio_archive(
            "us gb in jp ae sa au ca sg"
            country: String
            "top business science technology sports health entertainment"
            category: String
            "en ar jp in es fr"
            language: String
            "use sources comma delim max of5"
            domain: String
            "A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2021-04-18 or 2021-04-18T04:04:34)"
            from_date: String
            "A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2021-04-18 or 2021-04-18T04:04:34)"
            to_date: String
            "url encoded keyword search"
            q: String
            "Cannot be used with q"
            qInTitle: String
            "Use this to page through the results if the total results found is greater than the page size."
            page: Int
        ): NewsDataIOResponse!

        "Return available sources for given country/category/language inputs en,es gb,us sports,top"
        newsdataio_sources(
            "us gb in jp ae sa au ca sg"
            country: String
            "top business science technology sports health entertainment"
            category: String
            "en ar jp in es fr"
            language: String
        ): NewsDataIOSourcesResponse!
    }
    type NewsDataIOSourcesResponse {
        "Query status"
        status: String!
        "Results List"
        results: [NewsDataIOSource!]!
    }
    type NewsDataIOSource{
        "Source ID"
        id: String
        "Source Name"
        name: String
        "URL of source"
        url: String
        "A sources categories"
        category: [String]
        "A sources available languages"
        language: [String]
        "A sources regions of operation"
        country: [String]
    }
    type NewsDataIOResponse {
        "Query status"
        status: String!
        "Number of results"
        totalResults: Int!
        "Results List"
        results: [NewsDataIOArticle!]!
        "The page reference to the next available page to use in query"
        nextPage: Int
    }
    type NewsDataIOArticle {
        "Article Title"
        title: String
        "Link to Article in the wild"
        link: String
        "ID of Article source"
        source_id: String
        "Article keywords"
        keywords: [String]
        "Author?"
        creator: [String]
        "Accompanying image"
        image_url: String
        "Accompanying Video? "
        video_url: String
        "Article description"
        description: String
        "Date of Article publish"
        pubDate: String
        "The Article content if available"
        content: String
        
    }
`;

module.exports = typeDefs;
