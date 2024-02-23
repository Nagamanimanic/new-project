//const cypress = require("cypress")

describe('api automation', () => {
  //  it('verify get api', () => {
  //     cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
  //       expect(response.status).to.equal(200)
  //     expect(response.body).to.have.property('page', 2)
  //       expect(response.body.data[0].terminationId).to.equal()
  //     })
       describe('api automation', () => {
         it.only('get employees', () => {
   
          cy.request({
            method: "GET",
            url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=mani&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
            headers:{
              Cookie: "orangehrm=06369045e141633f559a075883bf1a97",
              Host: "opensource-demo.orangehrmlive.com",
              Referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
            }
          }).then((response) => {
            expect(response.status).to.equal(200)
            var res = JSON.stringify(response.body)
            cy.log(res)
           // cy.writeFile('cypress/fixtures/response.text', response)
            cy.writeFile('cypress/fixtures/response.json', response)
          })
        })
      })
    })


/*
  it('add employees', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    })
       cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
      headers: {

        Cookie: "orangehrm=95b1af5eeccd25e9ab99513696d17aeb",
        Host: "opensource-demo.orangehrmlive.com",
        Referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee",
      },
      body: { "firstName": "myu", "middleName": "ghjk", "lastName": "kghjn", "empPicture": null, "employeeId": "02398" }
    }).then((response) => {
      expect(response.status).to.equal(200)
      // cy.writeFile('cypress/fixtures/response.text', response)
      //cy.writeFile('cypress/fixtures/response.json', response)
    })
  })
  it('using one response to another', () => {
    const payload = {
      'name': 'radha',
      'job': 'rep'
    }
    cy.request('POST', 'https://reqres.in/api/users?page=2', payload).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body).to.have.property('name', 'radha')
      expect(response.body).to.have.property('job', 'rep')

      var time = JSON.stringify(response.body.createdAT)
      var idvalue = JSON.stringify(response.body.id)
      cy.log(time)
      cy.log(idvalue)
      cy.writeFile('cypress/fixtures/test.json', { 'id': idvalue })
    })

  })*/




