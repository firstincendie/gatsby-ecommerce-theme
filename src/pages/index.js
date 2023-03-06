import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CONTRE LES INCENDIES !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenu sur First Incendie !" />
        <p className="description">
          first incendie est votre partenaire pour la securite incendie a rennes.
        </p>
        <p className="description">
          Commandez vos extincteurs.
        </p>
         <p className="description">
          Nous vous aidons a trouver vos extincteurs :
         </p>
       
        <p className="description">leader de la <a href="https://firstincendie.com" target="_blank">securite incendie</a> en France</p>
        <p className="description">des <a href="https://firstincendie.com/produit/extincteur-co2-2kg-feux-electriques/">extincteurs CO2</a> pas cher</p>
        <p className="description">
          des 10enes d <a href="https://firstincendie.com/categorie-produit/produits/protection-incendie/extincteur/">extincteur</a>, de <a href="https://www.sales-hacking.com/blog-categories/seo-content-marketing">content marketing</a>, de techniques pour les Sales, du <a href="https://www.sales-hacking.com/blog-categories/web-scraping">Web scraping</a>, de Lead Generation et de l&apos;entrepreneuriat en général,
        </p>
        <p className="description">
          Des <a href="https://firstincendie.com/produit/extincteur-eau-6l-pp/">extincteurs eau</a>
        </p>
        <p className="description">
          super
        </p>
    
        <a href="https://twitter.com/" 
          class="twitter-follow-button" 
          data-show-count="false">Follow @StephenMesnild1
        </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    
      </main>

      <Footer />
    </div>
  )
}
