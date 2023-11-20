// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is Home Page</h1>
      <p>You are viewing Home page of exercise 1 module of Edureka NextJs course</p>
      <Link href="/about" style={{color: "blue"}}>
        About
      </Link>
      <br />
      <Link href="/contact" style={{color: "green"}}>
        Contact
      </Link>
    </main>
  );
};

export default Home;
