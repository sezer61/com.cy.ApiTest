const ENDPOINT = "https://todo.pixegami.io"

describe('API tests', () => {
  it('Can call endpoint', () => {
    cy.request(ENDPOINT)
      .its('status')
      .should('equal', 200)
  })

  it('Can create task', () => {
    const payload = {
      content: 'team',
      user_id: 'team_test',
      task_id: 'team_test_id',
      is_done: false
    }

    cy.request({
      method: 'PUT',
      url: `${ENDPOINT}/create-task`,
      body: payload
    })
      .its('status')
      .should('equal', 200)
      .its('body')
      .should('deep.equal', { message: 'Task created successfully.' })
  })
})
