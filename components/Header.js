import MainNav from './MainNav'
import UserMenu from './UserMenu'

export default function Header() {
  return (
    <React.Fragment>
      <UserMenu />
      <MainNav />
    </React.Fragment>
  )
}
