// pages/contact.js
import Link from 'next/link';

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is Contact Page</h1>
      <p>Contact us at Email : testuser@gmail.com</p>
      <p>Contact us at Phone : +91 1234567890</p>
      <Link href="/" style={{color: "red"}}>
        Home
      </Link>
      <br />
      <Link href="/about" style={{color: "blue"}}>
        About
      </Link>
    </main>
  );
};

export default Contact;
