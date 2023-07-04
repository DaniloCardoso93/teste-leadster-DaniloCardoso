export const metadata = {
  title: "Leadster",
  description: "Teste Leadster",
  icons: {
    icon: { url: "/favicon.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
