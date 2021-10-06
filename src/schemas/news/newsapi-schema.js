const { gql } = require('apollo-server');

//perhaps more of a generic news achema
//we could create a schema per api
//seems like best would be to form responses TO required api

const typeDefs = gql`
    "is this correct?"
    type Query {
        "Search all"
        everything_newsapi(
            """
            Keywords or phrases to search for in the article title and body.

            Advanced search is supported here:

            Surround phrases with quotes (") for exact match.
            Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
            Prepend words that must not appear with a - symbol. Eg: -bitcoin
            Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
            The complete value for q must be URL-encoded.
            """
            q: String
            """
            Keywords or phrases to search for in the article title only.

            Advanced search is supported here:

            Surround phrases with quotes (") for exact match.
            Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
            Prepend words that must not appear with a - symbol. Eg: -bitcoin
            Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
            The complete value for qInTitle must be URL-encoded.
            """
            qInTitle: String
            "A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from."
            sources: String
            "A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to."
            domains: String
            "A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results."
            excludeDomains: String
            "A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2021-08-21 or 2021-08-21T15:27:14)"
            from: String
            "A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2021-08-21 or 2021-08-21T15:27:14)"
            to: String
            "The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ardeenesfrheitnlnoptruseudzh."
            language: String
            """
            The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
            relevancy = articles more closely related to q come first.
            popularity = articles from popular sources and publishers come first.
            publishedAt = newest articles come first.
            """
            sortBy: String
            "The number of results to return per page."
            pageSize: Int
            "Use this to page through the results."
            page: Int
        ): NewsApiSearchResponse!
        "Search latest news"
        headlines_newsapi(
            "ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za"
            country: String
            "Find sources that display news of this category. Possible options: business entertainment general health science sports technology. Default: all categories."
            category: String
            "A comma-seperated string of identifiers for the news sources or blogs you want headlines from. Use the /top-headlines/sources endpoint to locate these programmatically or look at the sources index. Note: you can't mix this param with the country or category params."
            sources: String
            "Keywords or a phrase to search for."
            q: String
            "The number of results to return per page (request). 20 is the default, 100 is the maximum."
            pageSize: Int
            "Use this to page through the results if the total results found is greater than the page size."
            page: Int

        ): NewsApiSearchResponse!
        "Search latest news providers"
        sources_newsapi(
            "Find sources that display news of this category. Possible options: business entertainment general health science sports technology. Default: all categories."
            category: String
            "Find sources that display news in a specific language. Possible options: ar de en es fr he it nl no pt ru se ud zh. Default: all languages."
            language: String
            "ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za"
            country: String
        ): NewsApiSourceQueryResponse
    }
    "Search Response for resource and headlines searches"
    type NewsApiSearchResponse {
        "The status of the responses"
        status: String!
        "The total results available for the given query"
        totalResults: Int!
        "The returned articles list"
        articles: [NewsApiArticle!]!
    }
    type NewsApiArticle {
        "Article Source Object"
        source: NewsApiSource
        "Author of Article"
        author: String
        "Title of Article"
        title: String
        "Article description "
        description: String
        "url to the article in the wild"
        url: String
        "Image URL"
        urlToImage: String
        "Time of publish"
        publishedAt: String
        "The Article contnets if available"
        content: String
        
    }
    type NewsApiSourceQueryResponse{
        "If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated."
        status: String!
        "The results of the request."
        sources: [NewsApiSource]

    }
    type NewsApiSource {
        "The identifier of the news source. You can use this with our other endpoints."
        id: String
        "The name of the news source"
        name: String
        "A description of the news source"
        description: String
        "The URL of the homepage."
        url: String
        "The type of news to expect from this news source."
        category: String
        "The language that this news source writes in."
        language: String
        "The country this news source is based in (and primarily writes about)."
        country: String
    }
`;

module.exports = typeDefs;
