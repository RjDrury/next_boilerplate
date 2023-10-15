'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export const SignInButton = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <>loading...</>;

  if (status === 'authenticated')
    return (
      <Link href={'/dashboard'}>
        <Image
          src={session.user?.image || '/images/placeholder.png'}
          alt='Cool image'
          width={32}
          height={32}
        />
      </Link>
    );

  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      Sign In
    </button>
  );
};

export const SignOutButton = () => {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      Sign Out
    </button>
  );
};
