import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header>
      <img src={logo} alt="dt moey" />
      <button type="button">
        Nova Transação
      </button>
    </header>
  )
}