import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Topbar from '@/components/topbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gräsö Konstrunda 2023</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet"/>
        <meta name="description" content="Gräsö Konstrunda 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
        <Topbar />
        <div style={{flexDirection:'row', display:'flex'}}>
          <div className={styles.indexText}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sem mauris, hendrerit nec posuere eget, fringilla ac arcu. Donec ut porttitor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet volutpat purus. Aliquam eget purus commodo, vulputate sapien et, tincidunt elit. Quisque id dictum dui. Quisque maximus risus sit amet erat viverra fringilla. Donec placerat elit ac nibh pellentesque, non dapibus justo scelerisque. Mauris elementum dolor vel tincidunt facilisis. Pellentesque quis lorem vitae tellus blandit ornare. Ut at iaculis purus.

Mauris tellus enim, tempus nec risus et, blandit congue metus. Donec sed turpis in tellus pellentesque sollicitudin. Suspendisse semper consequat nibh, eget suscipit magna venenatis ut. Praesent eget felis velit. In hac habitasse platea dictumst. In euismod semper nunc, ut commodo mauris faucibus vel. Sed mollis mi lacus, eu congue ex placerat vel. Phasellus vitae nisl sit amet ipsum vehicula sodales et et ex. Cras sed sem et nibh egestas vestibulum ut non neque. Donec fringilla lectus vel interdum commodo. Etiam eu turpis accumsan, rutrum diam nec, iaculis lacus. Integer aliquet, libero id condimentum tincidunt, leo nunc laoreet mi, id elementum sapien augue fermentum lacus. Praesent erat sem, ultricies quis blandit eget, molestie vitae odio. Mauris tincidunt tincidunt sem rhoncus accumsan. Morbi ac augue urna.

Pellentesque risus sem, convallis eu euismod sit amet, tincidunt nec metus. Etiam in cursus augue. Maecenas fermentum metus non dapibus blandit. Duis vel dignissim quam. Ut placerat est orci, sed viverra lectus iaculis quis. Nulla dignissim lorem sapien, non ultricies magna scelerisque eget. Duis leo lectus, imperdiet nec porta vel, dignissim quis mi. In hac habitasse platea dictumst. Aliquam malesuada viverra lobortis. Aliquam et convallis mi. Nunc convallis lectus ligula. Ut vitae orci orci.

Nam sapien dolor, dapibus sed fermentum ut, vestibulum id velit. Aliquam pulvinar luctus dui, et scelerisque nibh sodales vel. Integer dapibus elit turpis, at efficitur ligula viverra nec. Cras tempor diam in tellus aliquam luctus. Quisque a imperdiet leo. Cras quis nibh purus. In sed bibendum ante, nec faucibus nisl. Pellentesque finibus tristique leo eget dictum. Praesent sit amet vulputate felis. Mauris pellentesque vestibulum lorem, imperdiet ullamcorper ipsum faucibus vestibulum. Curabitur nec efficitur nunc. Suspendisse rhoncus lectus ac est luctus accumsan. Ut blandit urna eget purus cursus, bibendum sagittis eros ultrices. In sodales ligula vel consectetur interdum.

Nunc finibus sapien massa, at aliquam eros sodales sed. Pellentesque finibus, augue sit amet rutrum luctus, risus urna tristique augue, sed tempor est nibh vitae nisl. Quisque eget iaculis lectus. Integer vitae felis at erat maximus pharetra eget vel mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id venenatis risus, sed scelerisque dolor. Suspendisse hendrerit dui at dui auctor, vel congue velit sollicitudin. Pellentesque lobortis ante id imperdiet gravida. Duis semper ullamcorper arcu, sit amet venenatis libero dignissim non. Quisque lobortis blandit erat, nec eleifend ante sodales eu. Vivamus maximus urna et eros interdum, at elementum odio fermentum. Nunc facilisis est at enim venenatis auctor. Nulla viverra mi sit amet mollis malesuada. Donec sed sapien ipsum. Suspendisse potenti.
            </p>
          </div>
        </div>
      </main>

    </>
  )
}
