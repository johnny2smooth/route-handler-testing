import styles from './page.module.css';
import ClientForm from './client-form';
import Image from 'next/image';

export const revalidate = 0;

export default async function Home() {
  const reponse = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-cache',
  });
  let imageURLs = await reponse.json();
  return (
    <main className={styles.main}>
      <pre>{JSON.stringify(imageURLs, null, 2)}</pre>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' }}>
        {imageURLs.map((url: string) => (
          <Image
            key={url}
            src={url}
            alt={'a photo that my friend drew'}
            width={100}
            height={100}
          />
        ))}
      </div>
      <ClientForm />
    </main>
  );
}
