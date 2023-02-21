import styles from '@/styles/Home.module.css'

export default function PlaceInfo({place}) {
    const id = parseInt(place.split('.')[0])
    switch (id) {
        case 1: {
            return (
                <div className={styles.infoBox}>
                    <h1>1. Rävsten</h1>
                    <p><em>Här finns lunch och fika. Passbåt från äspskärs brygga måste förbokas digitalt på www.rävsten.se</em></p><br/>
                    <p><b>Louise Westerberg</b><br/><em>Fårskinn, almanackor, skärgårdsbilder</em></p><br/>
                    <p><b>Jörgen Carlsson</b><br/><em>Akvarell, olja</em></p><br/>
                </div>
            )
            }
        case 2: {
            return (
                <div className={styles.infoBox}>
                    <h1>2. Idö gård</h1>
                    <p><b>AnnaKarin Boode</b><br/><em>Skulpturer, målningar</em></p><br/>
                    <p><b>Johanna Florenius</b><br/><em>Textil</em></p><br/>
                </div>
            )
            }
        case 3: {
            return (
                <div className={styles.infoBox}>
                    <h1>3. Bjurön</h1>
                    <p><em>Fika med hembakat</em></p><br/>
                    <p><b>Eva-Karin Lundberg</b><br/><em>Oljemålningar, trädgård</em></p><br/>
                </div>
            )
            }
        case 4: {
            return (
                <div className={styles.infoBox}>
                    <h1>4. Högklyke</h1>
                    <p><em>Fika, en fiol, några folkmusiklåtar under dagen</em></p><br/>
                    <p><b>Elisabeth Lundgren</b><br/><em>Fotografi - ögonblick med fåglar, landskap</em></p><br/>
                    <p><b>Britt-Marie Jansson</b><br/><em>Akvarell, måleri landskap och blommor</em></p><br/>
                </div>
            )
            }
        case 5: {
            return (
                <div className={styles.infoBox}>
                    <h1>5. Muskaregrund</h1>
                    <p><em>Fika</em></p><br/>
                    <p><b>Berit Blom</b><br/><em>Handarbeten, stickat och broderat</em></p><br/>
                </div>
            )
            }
        case 6: {
            return (
                <div className={styles.infoBox}>
                    <h1>6. Församlingshemmet</h1>
                    <p><em>Fika och musik som dyker upp när man minst anar det</em></p><br/>
                    <p><b>Åsa Gröndal</b><br/><em>Akrylmålningar</em></p><br/>
                    <p><b>Jessica Hörner</b><br/><em>Fotografier</em></p><br/>
                    <p><b>Helena Hörner</b><br/><em>Stickat</em></p><br/>
                    <p><b>Lilian Wickholm</b><br/><em>Akryl, olja, akvarell</em></p><br/>
                </div>
            )
            }
        case 7: {
            return (
                <div className={styles.infoBox}>
                    <h1>7. Gräsö Camping Restaurang Doppingen</h1>
                    <p><em>Fika, mat, glass, bad m.m. Här finns handikapptoalett</em></p><br/>
                    <p><b>Mimmi Dubén</b><br/><em>Måleri akryl</em></p><br/>
                    <p><b>Gunilla Skoglund</b><br/><em>Oljemåleri</em></p><br/>
                </div>
            )
            }
        case 8: {
            return (
                <div className={styles.infoBox}>
                    <h1>8. Nötsveden</h1>
                    <p><b>Sören Lindström</b><br/><em>Trähantverk svepteknik, svarvat, luffarslöjd</em></p><br/>
                </div>
            )
            }
        case 9: {
            return (
                <div className={styles.infoBox}>
                    <h1>9. Oxsten</h1>
                    <p><b>Marina Laurent</b><br/><em>Fotografier "Natur i närbild"</em></p><br/>
                </div>
            )
            }
        case 10: {
            return (
                <div className={styles.infoBox}>
                    <h1>10. Västerbyn</h1>
                    <p><em>Fika</em></p><br/>
                    <p><b>Gunilla Andersson</b><br/><em>Oljemåleri</em></p><br/>
                </div>
            )
            }
        case 11: {
            return (
                <div className={styles.infoBox}>
                    <h1>11. Djursten</h1>
                    <p><b>Göte Andersson</b><br/><em>Träslöjd</em></p><br/>
                </div>
            )
            }
        case 12: {
            return (
                <div className={styles.infoBox}>
                    <h1>12. Väster Mörtarö Studio 838</h1>
                    <p><b>Martin Lima de Faria</b><br/><em>Fotokonst med miniatyrer m.m</em></p><br/>
                </div>
            )
            }
        case 13: {
            return (
                <div className={styles.infoBox}>
                    <h1>13. Anders Matsgården</h1>
                    <p><em>Café. Antikviteter, vintage, retro. Silverutställning - äldre silver från trakten.</em></p><br/>
                    <p><b>Grävlings Naturprodukter Gräsö</b><br/><em>Naturnära hantverk, ljus m.m tillverkat på Gräsö</em></p><br/>
                    <p><b>Staffan Strand</b><br/><em>Bronsskulpturer, gipser</em></p><br/>
                </div>
            )
            }
        case 14: {
            return (
                <div className={styles.infoBox}>
                    <h1>14. Sjöäng</h1>
                    <p><b>Kerstin Sjöblom</b><br/><em>Akryl, olja, akvarell</em></p><br/>
                </div>
            )
            }
        case 15: {
            return (
                <div className={styles.infoBox}>
                    <h1>15. Norrboda Bygdegård</h1>
                    <p><em>Café. Här finns handikapptoalett</em></p><br/>
                    <p><b>Lars Bäcklund</b><br/><em>Trä och läder</em></p><br/>
                    <p><b>Gun Asplind</b><br/><em>Olja, akvarell, litografi, posters, vykort</em></p><br/>
                    <p><b>Thomas Olofsson</b><br/><em>Knivar</em></p><br/>
                    <p><b>Monica Ohlsson</b><br/><em>Personliga fotografier från Gräsö</em></p><br/>
                    <p><b>Paulina Partanen</b><br/><em>Olja, akvarell, akryl</em></p><br/>
                    <p><b>Peter Backemar</b><br/><em>Ställer ut sin bok "Livet på en ö i Roslagen under första delen av 1900-talet"</em></p><br/>
                    <p><b>Lena Dalnert</b><br/><em>Akvarell</em></p><br/>
                </div>
            )
            }
        case 16: {
            return (
                <div className={styles.infoBox}>
                    <h1>16. Västerhamnen Norrboda</h1>
                    <p><b>Vega Zetterström</b><br/><em>Akvarell, akryl</em></p><br/>
                    <p><b>Lars-Gunnar Bråvander</b><br/><em>Foton, akvarell, akryl m.m</em></p><br/>
                </div>
            )
            }
        case 17: {
            return (
                <div className={styles.infoBox}>
                    <h1>17. Västerhamnen Norrboda</h1>
                    <p><b>Elin Lindqvist</b><br/><em>Festfint "mina ängder gröna" dukningskonst och blomsterinstallationer</em></p><br/>
                </div>
            )
            }
        case 18: {
            return (
                <div className={styles.infoBox}>
                    <h1>18. Lökäng</h1>
                    <p><em>Musik måndag, onsdag, fredag och lördag 12.00</em></p><br/>
                    <p><b>Margit Martens</b><br/><em>Keramik</em></p><br/>
                    <p><b>Hans-åke Lerin</b><br/><em>Fotografier, fotobok</em></p><br/>
                    <p><b>Anna Karlsson</b><br/><em>Textilkonst-botaniska tryck på tyg och papper samt broderi</em></p><br/>
                    <p><b>Sanne Vils</b><br/><em>Waldorfdockor och silver</em></p><br/>
                    <p><b>Jon Gerbrand</b><br/><em>Lampor</em></p><br/>
                    <p><b>Dennis Persson</b><br/><em>Skulptur i återbruk, fotomontage, målningar</em></p><br/>
                    <p><b>Ulla Gerbrand</b><br/><em>Olja, akryl, grafik</em></p><br/>
                    <p><b>Kyll Hellberg</b><br/><em>Waldorfdockor och änglar</em></p><br/>
                    <p><b>Eleonore Holmgren Uppsalaförfattare</b><br/><em>På tisdag pratar hon om sin bok "Sista sommaren" som är nominerad till årets bok</em></p><br/>
                </div>
            )   
            }
        case 19: {
            return (
                <div className={styles.infoBox}>
                    <h1>19. Ängstorpet Norrboda</h1>
                    <p><b>Roland Kallström</b><br/><em>Konst och hantverk</em></p><br/>
                </div>
            )
            }
        case 20: {
            return (
                <div className={styles.infoBox}>
                    <h1>20. Hamnen Källskärsudden</h1>
                    <p><em>Ca 200m att gå ifrån parkeringen. Fika finns</em></p><br/>
                    <p><b>Carina Pålgård</b><br/><em>Måleri akryl, abstrakt och intuitivt</em></p><br/>
                    <p><b>Irene Wåhlin</b><br/><em>Akryl, akvarell, blandteknik, foto, textil, hantverk i olika material</em></p><br/>
                </div>
            )
            }
        default: {
            return (
                <div className={styles.infoBox}>
                    <h1>Error!</h1>
                </div>
            )
            }
        }   
    }
