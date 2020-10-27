require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client:'pg',
    connection:process.env.DB_URL,
})
console.log('knex is working')

// SELECT * FROM amazong_products;

// knexInstance.from('amazong_products')
//     .select('*');

// const q1 = knexInstance('amazong_products').select('*').toQuery()
// const q2 = knexInstance.from('amazong_products').select('*').toQuery()
    
// console.log('q1:', q1)
    
// console.log('q2:', q2)

// knexInstance
//   .select('product_id', 'name', 'price', 'category')
//   .from('amazong_products')
//   .where({ name: 'Point of view gun' })
//   .first()
//   .then(result => {
//     console.log(result)
//   })

//   const qry = knexInstance
//   .select('product_id', 'name', 'price', 'category')
//   .from('amazong_products')
//   .where({ name: 'Point of view gun' })
//   .first()
//   .toQuery()
//   // .then(result => {
//   //   console.log(result)
//   // })

// console.log(qry)

// const searchTerm = 'a'

function searchByProuctName(searchTerm) {
knexInstance
  .select('product_id','name','price','category')
  .from('amazong_products')
  .where('name', 'ILIKE', `%${searchTerm}%`)
  .then(result => {
      console.log(result)
  })
}

//searchByProductName('holo')

  function paginateProducts(page) {
      const productsPerPage = 10
      const offset = productsPerPage * (page-1)
      knexInstance
        .select('product_id','name','price','category','image')
        .from('amazong_products')
        .limit(productsPerPage)
        .offset(offset)
        .whereNotNull('image')
        .then(result => {
            console.log(result)
        })
  }

//   paginateProducts(2)

function searchByImage() {

    knexInstance
      .select('product_id','name','price','category','image')
      .from('amazong_products')
      .whereNotNull('image')
      .then(result => {
          console.log(result)
      })
}

// searchByImage()

function filterMostPop(days){
    knexInstance
        .from('whopipe_video_views')
        .count('date_viewed AS views')
        .select('video_name','region')
        .where(
            'date_viewed',
            '>',
            knexInstance.raw(`now() - '?? days'::INTERVAL`,days)
        )
        .groupBy('video_name','region')
        .orderBy([
            {column:'region', order:'ASC'},
            {column: 'views', order:'DESC'},
        ])
        .then(result => {
            console.log(result)
        })

}

filterMostPop(30)

