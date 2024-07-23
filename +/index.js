import { Octokit } from 'octokit'

export default async function(app) {
  new Octokit({ auth: 'abc123' })
  app.get('/hello', r => r.end('Welcome to sin'))
}
