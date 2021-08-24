import { RepositoryItem } from "./RepositoryItem";


const repository = {
  name: 'Unformed',
  description: 'only one repository',
  link: 'http://www.github.com/emersonsaf'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>LISTA DE REPOSITORIOS</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository="unform2" />
        <RepositoryItem repository="unform3" />
      </ul>
    </section>
  )
}