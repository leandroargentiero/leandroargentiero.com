export const FooterCredits = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="font-body text-xs text-gray-400">
      ©{currentYear} Leandro Argentiero - Built with Next.js and TailwindCSS
    </p>
  );
};
