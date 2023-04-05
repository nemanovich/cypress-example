/// <reference types="cypress" />

import TodoWidget from "../support/views/todo-widget"

const todoWidget = new TodoWidget();

describe('to-do app', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    context('with am items', () => {
        beforeEach(() => {
            todoWidget.addItems('task 1', 'task 2')
            todoWidget.completeItem('task 1')
        })

        it('can filter for completed tasks', () => {
            todoWidget.completedFilter().click()

            todoWidget.items().should('have.length', 1)
                .first().should('have.text', 'task 1')

            todoWidget.items().contains('task 2').should('not.exist')
        })
    })
})
