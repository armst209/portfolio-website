'use client';

import toast from 'react-hot-toast';
import Button from '@shared-components/Button';

/** UI only for now: the original newsletter form had no backend either. */
const NewsletterForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Thanks! You're on the list.");
    event.currentTarget.reset();
  };

  return (
    <form
      id="newsletter-form"
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-3 sm:flex-row">
      <label
        htmlFor="newsletter-email"
        className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Ex: your@email.com"
        className="h-12 flex-1 rounded-full border border-muted bg-base px-5 text-white placeholder:text-muted hover:border-white focus:border-white focus:outline-none"
      />
      <Button
        type="submit"
        variant="primary">
        Join
      </Button>
    </form>
  );
};

export default NewsletterForm;
