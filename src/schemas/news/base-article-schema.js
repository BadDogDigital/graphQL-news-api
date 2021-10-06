const { gql } = require('apollo-server');

const typeDefs = gql`
    type ArticleResults{
        status: String!
        total: Int
        articles: [Article!]
        pagination: Pagination
    }
    type Pagination{
        something: Int
    }
    type Article {
        title: String
        
        excerpt: String
        description: String
        content: String

        source: Source

        published: String

        url: String
        image: String

        language: String
        country: String
        category: [String]
        

    }

    type Source {
        publication: String
        author: String, 
        url: String
    }
`;

module.exports = typeDefs; 
//exports.articleTypes = typeDefs;