import Layout from '@/components/layout';
import dynamic from 'next/dynamic';

const ImgMapper = dynamic(() => {return import('@/components/imgMapper');}, { ssr: false });

export default function Home() {
  return (
    <>
      <Layout title="Gräsö konstrunda - Karta">
        <ImgMapper />
      </Layout>
    </>
  )
}