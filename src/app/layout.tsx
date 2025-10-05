import "../../styles/tokens.css";
import "../../builder-registry";

export const metadata = {
  title: "JHD Website",
  description: "Powered by Next.js + Builder.io + JHD Design System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        style={{
          fontFamily: "var(--ff-sans)",
          color: "var(--color-ct-pri)",
          background: "var(--color-bg-default-pri)",
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
