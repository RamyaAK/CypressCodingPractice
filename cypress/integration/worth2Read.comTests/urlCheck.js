var url = "https://ramyakulkarni.wordpress.com/";
describe('Launch my App',()=>{

it('check the domain URL is valid',()=>{
     cy.visit(url);
     expect(url).to.include('ramyakulkarni');
});
});
