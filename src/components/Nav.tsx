import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <h1><Link href="/">Home</Link></h1>
      <h1><Link href="/about">About</Link></h1>
      <h1><Link href="/contact">contact</Link></h1>
    </div>
  );
};

export default Nav;
