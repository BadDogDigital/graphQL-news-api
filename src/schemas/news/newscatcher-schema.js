const { gql } = require('apollo-server');

//perhaps more of a generic news achema
//we could create a schema per api
//seems like best would be to form responses TO required api

const typeDefs = gql`
    
    type Query {
        
        "All news query search"
        news_newscatcher(
            "The query used for search - REQUIRED"
            q: String!
            "The language specified for returned articles "
            lang: String
            "Don't return Articles of language"
            not_lang: String
            "The precision of returned by date - full, timezone unknown, date"
            published_date_precision: String
            "Apply given query to title or summary - Default is to use both "
            search_in: String
            "Countries where the news publisher is located - 1 or more can be used"
            countries: String
            "The inverse of the countries parameter"
            not_countries: String
            "news, sport,tech, world, finance,politics, business, economics, entertainment, beauty, travel, music, food, science, gaming"
            topic: String
            "One or more news resources to filter your search. It should be the normal form of the URL, nytimes.com,cnn.com,wsj.com"
            sources: String
            "One or more sources to be excluded from the search. nytimes.com,cnn.com,wsj.com "
            not_sources: String
            "Limit the search only for the sources which are in the top 1 million online websites - Default true"
            ranked_only: Boolean
            "The lowest boundary of the rank of a news website to filter by. "
            from_rank: Int
            "[0:999999] The upper boundary of the rank of a news website to filter by."
            to_rank: Int
            """relevancy (default value) — the most relevant results first 
            date — the most recently published results first 
            rank — the results from the highest-ranked sources first
            """
            sort_by: String
            "[1:100] How many articles to return per page."
            page_size: String
            "The number of the page. Use it to scroll through the results. "
            page: String
            "YYYY/mm/dd Until which point in time to search for. The default timezone is UTC"
            to: String
            "YYYY/mm/dd From which point in time to start the search. The default timezone is UTC.  Defaults to the past week."
            from: String
        ): NewsCatcherSearchResponse!

        "News Headlines search"
        headlines_newscatcher(
            "The language specified for returned articles "
            lang: String
            "Countries where the news publisher is located - 1 or more can be used"
            countries: String
            "The inverse of the countries parameter"
            not_countries: String
            "news, sport,tech, world, finance,politics, business, economics, entertainment, beauty, travel, music, food, science, gaming"
            topic: String
            "One or more news resources to filter your search. It should be the normal form of the URL, nytimes.com,cnn.com,wsj.com"
            sources: String
            "One or more sources to be excluded from the search. nytimes.com,cnn.com,wsj.com "
            not_sources: String
            "[1:100] How many articles to return per page."
            page_size: String
            "The number of the page. Use it to scroll through the results. "
            page: String
            
        ): NewsCatcherSearchResponse!

        "Sources search"
        sources_newscatcher(
            "Unsure available"
            lang: String
            "Unsure available"
            countries: String
            "news, sport,tech, world, finance,politics, business, economics, entertainment, beauty, travel, music, food, science, gaming"
            topic: String
        ): NewsCatcherSourcesResponse
    }
    "Source Query Response"
    type NewsCatcherSourcesResponse{
        "Success response message"
        message: String
        "Returned Sources List"
        sources: [String]
    }

    type NewsCatcherSearchResponse {
        "Statuse of request"
        status: String!
        "Total number of responses"
        total_hits: Int!
        "Current response page"
        page: Int!
        "total number of pages for this search"
        total_pages: Int!
        "Articles list"
        articles: [NewsCatcherArticle!]!
        "Returned requests per page"
        page_size: Int
    }
    type NewsCatcherArticle {
        "Article title"
        title: String
        "Article Author"
        author: String
        "Article published date"
        published_date: String
        "More precise I guess - like that the other might be lying"
        published_date_precision: String
        "Link to the article"
        link: String
        "Article url"
        clean_url: String
        "Excerpt of Article"
        excerpt: String
        "Summary of Article"
        summary: String
        "Something ignorable about rights :)"
        rights: String
        "Article rank?"
        rank: Int
        "Topics associated with the article"
        topic: String
        "Article of country publish"
        country: String
        "Article available/written language"
        language: String
        "Authors of the article"
        authors: [String]
        "Media associated with the article"
        media: String
        "Is it an opinion piece or a news article"
        is_opinion: Boolean
        "Twitter Account of author/publisher"
        twitter_account: String
        "score for something - you're ripping this data from somewhere aren't you?"
        _score: Int
        "Some kind of programmatic id"
        _id: String
    }
`;

module.exports = typeDefs;
