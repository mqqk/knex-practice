require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client:'pg',
    connection:process.env.DB_URL,
})
console.log('knex is working')




function searchTerm(term) {


knexInstance
    .from('shopping_list')
    .select('item_id','name','price','category','date_added')
    .where('name', 'ILIKE', `%${term}%`)
    .then(result => {
        console.log(result)
    })

}

// searchTerm('beef')

function paginateList(page) {
    const itemsPerPage = 6
    const offset = itemsPerPage * (page-1)
    knexInstance
        .select('*')
        .from('shopping_list')
        .limit(itemsPerPage)
        .offset(offset)
        .then(result => {
            console.log(result)
        })
}

// paginateList(2)

function addedAfterDate(daysAgo) {
    knexInstance
        .from('shopping_list')
        .select('*')
        .where(
            'date_added',
            '>',
            knexInstance.raw(`now() - '?? days' :: INTERVAL`,daysAgo)
        )
        .then(result => {
            console.log(result)
        })
}

// addedAfterDate(40)

function totalCostCat() {
    // let total=0;

    knexInstance
        .from('shopping_list')
        .select('category')
        .sum('price as total')
        .groupBy('category')
        .then(result => {
            console.log(result)
        })
}

totalCostCat()