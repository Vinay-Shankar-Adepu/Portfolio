export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Vinay Shankar Adepu. Built with Next.js and
      Tailwind CSS.
    </footer>
  );
}
