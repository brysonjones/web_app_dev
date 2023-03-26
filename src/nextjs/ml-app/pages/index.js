
import Link from 'next/link';
import { useAuth } from "../components/Layout/Firebase/context";

export default function Home() {
  const { user } = useAuth();

  return (
    <div style={{ padding: '40px' }}>
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <p>
        <Link href="/authenticated">
          Go to signed in page
        </Link>
      </p>
      <p>
        <Link href="/login">
          Login
        </Link>
      </p>
    </div>
  );
}
