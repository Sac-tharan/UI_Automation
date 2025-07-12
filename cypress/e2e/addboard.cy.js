describe("Create Board (normal flow only)", () => {
  it("creates a board by clicking create button and typing title", () => {
    cy.fixture("addNewBoardTitleData").then(
      ({ NewBoardTitle, NewListTitle }) => {
        cy.visit("http://localhost:3000/");

        cy.get('[data-cy="create-board"]', { timeout: 10000 })
          .should("be.visible")
          .click();

        cy.get('[data-cy="new-board-input"]').type(NewBoardTitle);

        cy.get('[data-cy="new-board-create"]').click();

        cy.get('[data-cy="board-title"]', { timeout: 10000 }).should(
          "have.value",
          NewBoardTitle
        );

        // Add lists one by one
        NewListTitle.forEach((listName) => {
          cy.get('[data-cy="add-list-input"]').clear().type(listName);
          cy.contains("button", "Add list").click();
        });

        // Verify all lists exist by matching input values
        cy.get('[data-cy="list-name"]')
          .then(($inputs) => {
            const values = [...$inputs].map((input) => input.value);
            NewListTitle.forEach((listName) => {
              expect(values).to.include(listName);
            });
          })
          .then(() => {
            // After verification, find the input with value 'DemoListTwo' and click the SVG by XPath
            cy.get('[data-cy="list-name"]').then(($inputs) => {
              // Find the input with value "DemoListTwo"
              const targetInput = [...$inputs].find(
                (input) => input.value.trim() === "DemoListtwo"
              );

              expect(targetInput, "List input DemoListTwo should exist").to.not
                .be.undefined;

              cy.wrap(targetInput)
                .parent() // move to container holding input and button
                .find('[data-cy="list-options"]') // find the button with the SVG inside
                .should("be.visible")
                .click();
              // After menu opens, click "Delete list"
              cy.get('[data-cy="delete-list"]').should("be.visible").click(); // click the button
            });
          });
      }
    );
  });
});
