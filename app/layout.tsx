import ReactQueryProviders from '@hooks/useReactQuery';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
