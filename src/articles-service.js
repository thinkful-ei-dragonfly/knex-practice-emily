const ArticlesService = {
  getAllArticles(knex) {
    return knex.select('*').from('blogful_articles')
  }
}

module.exports = ArticlesService

//getAllArticles should retrieve all articles from a specific table
//in a specific database
//need expected data, this is the state of db table. 
//actual data
//check actual values match expected
//try method when in diff states

