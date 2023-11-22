import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/notes"}>Notes</Link>
    </nav>
  );
};

export default Nav;
