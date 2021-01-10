
describe('Launch my App',()=>{

it('check the domain URL is valid',()=>{
     cy.visit();
     expect(url).to.include('ramyakulkarni');
});
});