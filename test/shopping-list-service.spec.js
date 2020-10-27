const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')
const { expect } = require('chai')


describe('Shopping List', function () {
    let db

        let testItems = [
            {
               'item_id':1,
               'name':'beer',
               'price':'8.99',
               'date_added':new Date('2019-01-22T16:28:32.615Z'),
               'checked':false,
               'category':'Main'
            },
            {
                'item_id':2,
                'name':'cheese',
                'price':'9.99',
                'date_added':new Date('2019-01-21T16:24:32.615Z'),
                'checked':false,
                'category':'Breakfast'
            },
            {
                'item_id':3,
                'name':'bread',
                'price':'5.99',
                'date_added':new Date('2019-01-20T16:23:32.615Z'),
                'checked':false,
                'category':'Snack'
            },
            {
                'item_id':4,
                'name':'milk',
                'price':'4.99',
                'date_added':new Date('2019-01-20T16:23:32.615Z'),
                'checked':false,
                'category':'Lunch'
            },
            {
                'item_id':5,
                'name':'bread',
                'price':'5.99',
                'date_added':new Date('2019-01-20T16:23:32.615Z'),
                'checked':false,
                'category':'Main'
            },
         
        ]

    before(() => {
        db=knex({
            client:'pg',
            connection:process.env.TEST_DB_URL,
        })
    })

    before(() => db('shopping_list').truncate())
    afterEach(() => db('shopping_list').truncate())
    after(() => db.destroy())

    context(`When 'shopping_list' has info`, () => {
        beforeEach(() => {
            return db
                .into('shopping_list')
                .insert(testItems)
        })

        it(`getEntireList() shows the entire list from 'shopping_list' table`, () => {
            const expectedItems = testItems.map(item => ({
                ...item,
                checked:false,
            }));
            return ShoppingListService.getEntireList(db)
                .then(actual => {
                  expect(actual).to.eql(expectedItems)
                })
        } )
    } )


})