import type { Metadata } from 'next';
import Image from 'next/image';
import signUpHeader from '@public/assets/vinyl_yellow.svg';
import SignUpForm from '@/features/auth/components/SignUpForm';

export const metadata: Metadata = { title: 'Sign Up' };

export default function SignUpPage() {
  return (
    <>
      <div className="mb-10 flex flex-col items-center text-center">
        <Image
          src={signUpHeader}
          alt=""
          width={60}
          height={60}
          className="mb-4"
        />
        <h1 className="font-display text-4xl font-extrabold tracking-tight">
          Start your collection today
        </h1>
      </div>
      <SignUpForm />
    </>
  );
}
