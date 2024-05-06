/// <reference types = 'Cypress'/>

describe('get api user test', () => {

    let accessToken  = '0984baaff701f93dfe1512ea1f653d43be8b3833785e88c0aaf1622043bd7aaa'
    
    it('get users tests',() =>{

        cy.request({
            method : 'GET',
            url    : 'https://gorest.co.in/public-api/users',
            headers: {
                'authorization' : "Bearer " + accessToken
            }
        }).then((res)=> {

            expect(res.status).to.eq(200)  
            expect(res.body.meta.pagination.limit).to.eq(10)

        })
    })

    it('get users by id test',() =>{

        cy.request({
            method : 'GET',
            url    : 'https://gorest.co.in/public-api/users/6819936',
            headers: {
                'authorization' : "Bearer " + accessToken
            }
        }).then((res)=> {

            expect(res.status).to.eq(200)  
            expect(res.body.data.name).to.eq('Tenali Ramakrishna')

        })
    })
    
    
    })