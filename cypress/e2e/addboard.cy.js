describe("Add New Board", () => {
  it('should click "Create new board" and create a board', function () {
    cy.fixture("addNewBoardTitleData").then((data) => {
      const NewBoardTitle = data.NewBoardTitle;

      cy.visit("http://localhost:3000/");
      // Click the Create new board section
      cy.get('[data-cy="create-board"]').click();

      cy.get('[data-cy="new-board-input"]').type(NewBoardTitle);
      cy.get('[data-cy="new-board-create"]').click();
      
    //   Verify the board title input contains the correct title
      cy.get('[data-cy="board-title"]').should('have.value', NewBoardTitle);
    });
  });
});
