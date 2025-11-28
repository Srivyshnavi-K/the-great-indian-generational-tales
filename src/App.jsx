import './index.css'
export default function App() {
  return (
    <>
      <header>
        <div className="container nav" role="navigation" aria-label="Main">
          <a className="brand" href="#">The Great Indian Generational Tales</a>
          <nav>
            <a href="#stories">Stories</a>
            <a href="#inspiration">Inspiration</a>
            <a href="#contact">Join the journey</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" aria-labelledby="title">
          <div className="eyebrow">A humane tale</div>
          <h1 id="title">We are the generation between two worlds.</h1>
          <p className="tagline">
            Stories of who we were, who we are, and who we are becoming, across family, love, money, migration, and the algorithms that now shape our hearts.
          </p>

          <div className="poster" role="region" aria-label="First poster">
            <p>We grew up listening to stories spoken slowly over cups of chai, and now we move through life at the speed of notifications.</p>
            <p>We carry the <strong>values</strong> of our parents, the <strong>dreams</strong> of our grandparents, and the <strong>pressures</strong> of a world our elders never lived in.</p>
            <ul>
              <li>Social media & identity</li>
              <li>Modern love, loneliness, and connection</li>
              <li>Money, ambition, class, and migration</li>
              <li>Family expectations, silence, love, and repair</li>
              <li>The invisible emotional stories passed down to us</li>
            </ul>
            <p><em>These are not just stories. They are the inheritance of the Indian heart.</em></p>
          </div>

        </section>

        <section id="stories" className="section" aria-labelledby="stories-title">
          <h2 id="stories-title">Featured Stories (Very soon)</h2>
          <div className="grid" role="list">
            <article className="card" role="listitem">
              <h3>From Dadi to Digital</h3>
              <p>What we learned about love before and after the feed.</p>
            </article>
            <article className="card" role="listitem">
              <h3>Money and Fame: The New Language</h3>
              <p>Ambition, class mobility, and quiet shame.</p>
            </article>
          </div>
        </section>

        <section id="inspiration" className="section" aria-labelledby="inspiration-title">
          <h2 id="inspiration-title">Inspiration</h2>
          <p>
           Inspired by the work of the{" "}
            <a href="https://www.humanetech.com/" target="_blank" rel="noopener">
              Center for Humane Technology
            </a>{" "}, bringing the way we live back into life.
          </p>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Join the journey</h2>
          <p>
            If you are someone who has lived between worlds, or someone who wants to see rising technology through the lens of humanity, please join us.
          </p>
          <div className="contact-card" role="contentinfo" aria-label="Contact information">
            <div>
              <p className="contact-note">Looking for volunteers and supporters.</p>
            </div>
            <a className="cta" href="mailto:thegreatindiangenerationaltales@gmail.com">thegreatindiangenerationaltales@gmail.com</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} The Great Indian Generational Tales, Inspired by the <a href="https://www.humanetech.com/" target="_blank" rel="noopener">Center for Humane Technology</a>.</p>
        </div>
      </footer>
    </>
  )
}
