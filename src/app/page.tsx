import { redirect } from 'next/navigation';

// This page only renders as a fallback; in practice the middleware intercepts
// requests to `/` and redirects to the default locale (e.g. `/es`).
export default function RootPage() {
  redirect('/es');
}