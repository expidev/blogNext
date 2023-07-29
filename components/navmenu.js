
import { useRouter } from 'next/router';
import Link from 'next/link';

// menu name and link
const menu = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Articles', link: '/articles' }
];

// render menu
export default function Navmenu() {
  // get current page route
  const
    router = useRouter(),
    currentPage = router.pathname;

  return (
    <nav>
      <ul>
        { menu.map(item => (
          <Navlink
            key={ item.link }
            text={ item.text }
            link={ item.link }
            currentpage={ currentPage }
          />
        ))}
      </ul>
    </nav>
  )
}

// render individual menu link
function Navlink({ text, link, currentpage }) {
  if (link === currentpage) {
    return (
      <li className="active"><strong>{ text }</strong></li>
    );
  }
  else {
    return (
      <li><Link href={ link }>{ text }</Link></li>
    );
  }
}