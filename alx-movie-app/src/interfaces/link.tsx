import Link from 'next/link';

function MyComponent() {
  return (
    <Link href="/about" legacyBehavior>
      <a>About</a>
    </Link>
  );
}