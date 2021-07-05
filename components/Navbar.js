import Link from 'next/link'

export default function Navbar({ }) {
  const user = null
  const username = null

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button>MICme</button>
          </Link>
        </li>

        {username && (
          <>
            <li>
              <Link href="/admin">
                <button>Nouveau</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user.photoURL}/>
              </Link>
            </li>
          </>
        )}

        {!username && (
          <>
            <li>
              <Link href="/connexion">
                <button>LOG</button>
              </Link>
            </li>
          </>
        )}      

      </ul>
    </nav>
  )
}