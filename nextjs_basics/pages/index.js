import Link from "next/Link";
const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/blog/asdasd">blog asdasd</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
