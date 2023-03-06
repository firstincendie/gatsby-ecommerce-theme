import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>💙 LETS GROW !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to LETS GROW!" />
        <p className="description">
          Lets GROW est la référence des ressources : bonnes pratiques dans le domaine du Growth Hacking et de l&apos;entrepreneuriat au sens large.
        </p>
        <p className="description">
          Nous aidons gratuitement les entrepreneurs, growth hackers et commerciaux pour obtenir tout le nécessaire pour booster leur croissance.
        </p>
         <p className="description">
          Qu&apos;il s&apos;agisse de novices ou de profils chevronnés, nous alimentons chaque jour une base de :
         </p>
       
        <p className="description">Des centaines de <a href="https://firstincendie.com" target="_blank">growth hacks</a> enrichis CHAQUE JOUR</p>
        <p className="description">Près de 100 <a href="https://firstincendie.com/categorie-produit/produits/protection-incendie/extincteur/">ressources pour entrepreneurs</a> téléchargeables</p>
        <p className="description">
          100 articles de blog autour du <a href="https://firstincendie.com/produit/extincteur-co2-2kg-feux-electriques/">growth hacking</a>, de <a href="https://www.sales-hacking.com/blog-categories/seo-content-marketing">content marketing</a>, de techniques pour les Sales, du <a href="https://www.sales-hacking.com/blog-categories/web-scraping">Web scraping</a>, de Lead Generation et de l&apos;entrepreneuriat en général,
        </p>
        <p className="description">
          Des conseils de lecture avec <a href="https://firstincendie.com/produit/extincteur-eau-6l-pp/">le meilleur des livres business</a>
        </p>
        <p className="description">
          Des applications SaaS
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
