var url ="https://testproject.io/";

describe("Visit the home page of testProject.io",()=>{
    it("check if such url exists",()=>{
         cy.visit("https://testproject.io/");
         expect(url).to.include('testproject');
    });
});