/// <reference types="cypress" />

class TodoWidget {

    completedFilter = () => {
        return cy.get('.filters').contains('Completed')
    }
    items = () => {
        return cy.get('.todo-list li')
    }

    addItems = (...titles) => {
        titles.forEach(title => {
            cy.get('.new-todo').type(`${title}{enter}`)
        })
    }

    completeItem = (title) => {
        return this.items().contains(title).parent().find('input[type=checkbox]').check()
    }
}

export default TodoWidget;