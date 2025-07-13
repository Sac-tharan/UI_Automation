# Automation Testing Project

This repository contains both UI automation tests (using Cypress) and API automation tests (using Postman).

---

## Folder Structure

- `/cypress`  
  Contains all the UI automation test scripts written using Cypress.

- `/Api automation code`  
  Contains the exported Postman collection JSON file for API automation.

---

## UI Automation (Cypress)

### How to run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Install Cypress dependencies:

   ```bash
   npm install
3. Run Cypress tests:
   
    npx cypress open

## API Automation (Postman)

### How to run
1.Import the collection JSON file from /Api automation code/API automation.postman_collection.json into Postman:
   Open Postman.
   Click Import → Select file → Choose API automation.postman_collection.json.
2.Run the collection or individual API requests.
3.The collection includes:
    Create a new list (POST /api/lists)
    Delete the newly created list (DELETE /api/lists/:id)
    Tests included for response verification and variable management.
