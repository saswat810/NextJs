// pages/about.js
import Link from 'next/link';

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is About Page</h1>
      <p>This is the about page of the nextJs course for demo purpose</p>
      <Link href="/" style={{color: "red"}}>
        Home
      </Link>
      <br />
      <Link href="/contact" style={{color: "green"}}>
        Contact
      </Link>
    </main>
  );
};

export default About;
