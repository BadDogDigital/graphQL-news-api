const { gql } = require('apollo-server');

//perhaps more of a generic news achema
//we could create a schema per api
//seems like best would be to form responses TO required api

const typeDefs = gql`

    type Query {
        "Search news sources"
        news_mediastack(
            "[Optional] Use this parameter to include or exclude one or multiple comma-separated news sources. Example: To include CNN, but exclude BBC: &sources=cnn,-bbc"
            sources: String
            "general - Uncategorized News business - Business News entertainment - Entertainment News health - Health News science - Science News sports - Sports News technology - Technology News"
            categories: String
            " Argentina ar  Australia au  Austria at  Belgium be  Brazil br  Bulgaria bg  Canada ca  China cn  Colombia co  Czech Republic cz  Egypt eg  France fr  Germany de  Greece gr  Hong Kong hk  Hungary hu  India in  Indonesia id  Ireland ie  Israel il  Italy it  Japan jp  Latvia lv  Lithuania lt  Malaysia my  Mexico mx  Morocco ma  Netherlands nl  New Zealand nz  Nigeria ng  Norway no  Philippines ph  Poland pl  Portugal pt  Romania ro  Saudi Arabia sa  Serbia rs  Singapore sg  Slovakia sk  Slovenia si  South Africa za  South Korea kr  Sweden se  Switzerland ch  Taiwan tw  Thailand th  Turkey tr  UAE ae  Ukraine  ua  United Kingdom gb  United States us  Venuzuela ve"
            countries: String
            "ar - Arabic de - German en - English es - Spanish fr - French he - Hebrew it - Italian nl - Dutch no - Norwegian pt - Portuguese ru - Russian se - Swedish zh - Chinese"
            languages: String
            "[Optional] Use this parameter to seach for sentences, you can also exclude words that you do not want to appear in your search results. Example: To search for 'New movies 2021' but exclude 'Matrix': &sources=new movies 2021 -matrix"
            keywords: String
            "[Optional] Use this parameter to specify a date or date range. Example: &date=2020-01-01 for news on Jan 1st and &date=2020-12-24,2020-12-31 for news between Dec 24th and 31st."
            date: String
            "[Optional] Use this parameter to specify a sorting order. Available values: published_desc (default), published_asc, popularity"
            sort: String
            "[Optional] Use this parameter to specify a pagination limit (number of results per page) for your API request. Default limit value is 25, maximum allowed limit value is 100."
            limit: Int
            "[Optional] Use this parameter to specify a pagination offset value for your API request. Example: An offset value of 100 combined with a limit value of 10 would show results 100-110. Default value is 0, starting with the first available result."
            offset: Int
        ): MediaStackArticlesResponse!

        "!!!WARNING!!!  APPEARS NOT TO WORK!! Return sources by search"
        sources_mediastack(
            "[Required] Use this parameter to specify one or multiple search keywords."
            search: String!
            " Argentina ar  Australia au  Austria at  Belgium be  Brazil br  Bulgaria bg  Canada ca  China cn  Colombia co  Czech Republic cz  Egypt eg  France fr  Germany de  Greece gr  Hong Kong hk  Hungary hu  India in  Indonesia id  Ireland ie  Israel il  Italy it  Japan jp  Latvia lv  Lithuania lt  Malaysia my  Mexico mx  Morocco ma  Netherlands nl  New Zealand nz  Nigeria ng  Norway no  Philippines ph  Poland pl  Portugal pt  Romania ro  Saudi Arabia sa  Serbia rs  Singapore sg  Slovakia sk  Slovenia si  South Africa za  South Korea kr  Sweden se  Switzerland ch  Taiwan tw  Thailand th  Turkey tr  UAE ae  Ukraine  ua  United Kingdom gb  United States us  Venuzuela ve"
            countries: String
            "ar - Arabic de - German en - English es - Spanish fr - French he - Hebrew it - Italian nl - Dutch no - Norwegian pt - Portuguese ru - Russian se - Swedish zh - Chinese"
            languages: String
            "general - Uncategorized News business - Business News entertainment - Entertainment News health - Health News science - Science News sports - Sports News technology - Technology News"
            categories: String
            "[Optional] Use this parameter to specify a pagination limit (number of results per page) for your API request. Default limit value is 25, maximum allowed limit value is 100."
            limit: Int
            "[Optional] Use this parameter to specify a pagination offset value for your API request. Example: An offset value of 100 combined with a limit value of 10 would show results 100-110. Default value is 0, starting with the first available result."
            offset: Int
        ): MediaStackSourcesResponse!
    }
    ""
    type MediaStackArticlesResponse {
        ""
        pagination: MediaStackPagination!
        ""
        data: [MediaStackArticle!]!
    }
    ""
    type MediaStackSourcesResponse {
        ""
        pagination: MediaStackPagination!
        ""
        data: [MediaStackSource!]!
    }
    ""
    type MediaStackPagination {
        ""
        limit: Int
        ""
        offset: Int
        ""
        count: Int
        ""
        total: Int
    }
    ""
    type MediaStackSource {
        ""
        id: String
        ""
        name: String
        ""
        category: String
        ""
        country: String
        ""
        language: String
        ""
        url: String
    }
    ""
    type MediaStackArticle {
        ""
        title: String
        ""
        author: String
        ""
        description: String
        ""
        url: String
        ""
        source: String
        ""
        image: String
        ""
        category: String
        ""
        language: String
        ""
        country: String
        ""
        published_at: String
    }
`;

module.exports = typeDefs;
