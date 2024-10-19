import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import '../styles/global.css'; // Adjust the path as necessary

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <h3>In this article</h3>
        <ul>
          <li>
            <a href="#AndrewGibiansky-header-link" style={{ textDecoration: 'underline' }}>
            Andrew Gibiansky   ::   Math → [Code]
            </a>
            <ul>
                    <li>
                        <strong>Bringing HPC Techniques to Deep Learning</strong> 21/2/2017
                    </li>
                    <li>
                        <strong>NRAM: Theano Implementation</strong> 5/6/2016
                    </li>
                    <li>
                        <strong>Cool Linear Algebra: Singular Value Decomposition</strong> 29/5/2013
                    </li>
            </ul>
          </li>
          <li>
            <a href="#jeremy-jordan-blog-archives" style={{ textDecoration: 'underline' }}>
            Jeremy Jordan - Thoughts, ideas, and new things I've learned.
            </a>
            <ul>
                    <li>
                        <strong>Understanding the Transformer architecture for neural networks</strong> 6/5/2023
                    </li>
                   
            </ul>
          </li>
          <li>
            <a href="#hi-Eugene-Yan" style={{ textDecoration: 'underline' }}>
            Eugene Yan - I design, build, and operate machine learning systems that serve customers at scale. Currently, I&#39;m a Senior Applied Scientist at Amazon. Outside of work, I also...
            </a>
            <ul>
                    <li>
                        <strong>Don't Mock Machine Learning Models In Unit Tests</strong> 25/2/2024
                    </li>
                    <li>
                        <strong>Text-to-Image: Diffusion, Text Conditioning, Guidance, Latent Space</strong> 27/11/2022
                    </li>
                    
            </ul>
          </li>
        </ul>



        {/* <article class="jeremy-jordan-blog-archives">
        </article> */}

        {/* <article class="jeremy-jordan-post-card post tag-data-science no-image">

<div class="jeremy-jordan-post-card-content">

    <a class="jeremy-jordan-post-card-content-link" href="https://www.jeremyjordan.me/transformer-architecture/">

        <header class="jeremy-jordan-post-card-header">
            <div class="jeremy-jordan-post-card-primary-tag">Data Science</div>
            <h2 class="jeremy-jordan-post-card-title">Understanding the Transformer architecture for neural networks</h2>
        </header>

        <section class="jeremy-jordan-post-card-excerpt">
            <p>The attention mechanism allows us to merge a variable-length sequence of vectors into a fixed-size context vector. What if we could use this mechanism to entirely replace recurrence for sequential modeling? This blog post covers the Transformer architecture which explores such an approach.</p>
        </section>

    </a>

    <footer class="jeremy-jordan-post-card-meta">
        <ul class="jeremy-jordan-author-list">
            <li class="jeremy-jordan-author-list-item">

                <div class="jeremy-jordan-author-name-tooltip">
                    Jeremy Jordan
                </div>

                <a href="/author/jeremy/" class="jeremy-jordan-static-avatar">
                    <img class="jeremy-jordan-author-profile-image" src="https://www.jeremyjordan.me/content/images/size/w100/2018/03/headshot-small.jpeg" alt="Jeremy Jordan"></img>
                </a>
            </li>
        </ul>
        <div class="jeremy-jordan-post-card-byline-content">
            <span><a href="/author/jeremy/" class="jeremy-jordan">Jeremy Jordan</a></span>
            <span class="jeremy-jordan-post-card-byline-date"><time datetime="2023-05-06">6 May 2023</time> <span class="bull">•</span> 16 min read</span>
        </div>
    </footer>

</div>

</article> */}





        <article id="jeremy-jordan-blog-archives" class="jeremy-jordan-post-card post tag-data-science no-image no-image">

            <div class="jeremy-jordan-post-card-content ">

                <a class="post-card-content-link jeremy-jordan" href="https://www.jeremyjordan.me/transformer-architecture/">

                    <header class="post-card-header jeremy-jordan">
                        <div class="post-card-primary-tag jeremy-jordan">Data Science</div>
                        <h2 class="post-card-title jeremy-jordan">Understanding the Transformer architecture for neural networks</h2>
                    </header>

                    <section class="post-card-excerpt jeremy-jordan">
                        <p>The attention mechanism allows us to merge a variable-length sequence of vectors into a fixed-size context vector. What if we could use this mechanism to entirely replace recurrence for sequential modeling? This blog post covers the Transformer architecture which explores such an approach.</p>
                    </section>

                </a>

                <footer class="post-card-meta jeremy-jordan">
                    <ul class="author-list jeremy-jordan">
                        <li class="author-list-item jeremy-jordan">

                            <div class="author-name-tooltip jeremy-jordan">
                                Jeremy Jordan
                            </div>

                            <a href="/author/jeremy/" class="static-avatar jeremy-jordan">
                                <img class="author-profile-image jeremy-jordan" src="https://www.jeremyjordan.me/content/images/size/w100/2018/03/headshot-small.jpeg" alt="Jeremy Jordan"></img>
                            </a>
                        </li>
                    </ul>
                    <div class="post-card-byline-content jeremy-jordan">
                        <span><a href="/author/jeremy/" class="jeremy-jordan">Jeremy Jordan</a></span>
                        <span class="post-card-byline-date jeremy-jordan"><time datetime="2023-05-06">6 May 2023</time> <span class="bull">•</span> 16 min read</span>
                    </div>
                </footer>

            </div>

            </article>
        
       
            <div id="hi-Eugene-Yan"><h1>Hi, I'm Eugene Yan, <span 
            //style="opacity: 0.895078;
            // "
            >an ML engineer.</span></h1></div>

        <article class="Eugene-Yan-blog-archives">
           


            <div class="Eugene-Yan-cp-listing">
              <h4 class="cp-title"><a href="https://eugeneyan.com/writing/unit-testing-ml/" title="Don't Mock Machine Learning Models In Unit Tests">Don't Mock Machine Learning Models In Unit Tests</a></h4>
              <p class="cp-desc">How unit testing machine learning code differs from typical software practices</p>
              <p class="cp-date">25 Feb 2024 &nbsp;·&nbsp;
              6 min &nbsp;·&nbsp;
              <a class="Eugene-Yan-tag" href="/tag/machinelearning/">machinelearning</a>
              <a class="Eugene-Yan-tag" href="/tag/engineering/">engineering</a>
              </p>
              </div>
              <h2 id="further-reading">Further reading<a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#further-reading" // </h2>style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"
              ></a></h2>
              <ul>
                  <li><a href="https://eugeneyan.com/writing/testing-ml/" target="_blank">How to Test Machine Learning Code and Systems</a></li>
                  <li><a href="https://eugeneyan.com/writing/testing-pipelines/" target="_blank">Writing Robust Tests for Data &amp; Machine Learning Pipelines</a></li>
                  <li><a href="https://www.jeremyjordan.me/testing-ml/" target="_blank">Effective Testing for Machine Learning Systems</a></li>
                  <li><a href="https://krokotsch.eu/posts/deep-learning-unit-tests/" target="_blank">How to Trust Your Deep Learning Code</a></li>
                  <li><a href="https://karpathy.github.io/2019/04/25/recipe/" target="_blank">A Recipe for Training Neural Networks</a></li>
                  <li><a href="https://theaisummer.com/unit-test-deep-learning/" target="_blank">How to Unit Test Deep Learning</a></li>
                  <li><a href="https://microsoft.github.io/code-with-engineering-playbook/machine-learning/ml-testing/" target="_blank">Testing Data Science and MLOps Code</a></li>
                  </ul>



                  <div class="Eugene-Yan-cp-listing">
                <h4 class="cp-title">
                    <a href="https://eugeneyan.com/writing/text-to-image/" title="Text-to-Image: Diffusion, Text Conditioning, Guidance, Latent Space">
                        Text-to-Image: Diffusion, Text Conditioning, Guidance, Latent Space
                    </a>
                </h4>
                <p class="cp-desc">The fundamentals of text-to-image generation, relevant papers, and experimenting with DDPM.</p>
                <p class="cp-date">
                    27 Nov 2022 &nbsp;·&nbsp; 19 min &nbsp;·&nbsp; 
                    <span class="Eugene-Yan-tag">Eugene Yan</span>
                    <a class="Eugene-Yan-tag" href="/tag/deeplearning/">deeplearning</a>
                    <a class="Eugene-Yan-tag" href="/tag/nlp/">nlp</a>
                    <a class="Eugene-Yan-tag" href="/tag/survey/">survey</a>
                </p>
            </div>

          </article>

        <h1 id="AndrewGibiansky-header-link" class="AndrewGibiansky-header">
            <a href="https://andrew.gibiansky.com/">
                Andrew Gibiansky
                &nbsp;&nbsp;::&nbsp;
                &nbsp;<em>Math</em>&nbsp;→&nbsp;[<strong>Code</strong>]
            </a>
        </h1>
              {/* <article class="ANDREW-GIBIANSKY-blog-archives">
          <h1>
              <a href="https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce">Bringing HPC Techniques to Deep Learning</a>
          </h1>

          <time datetime="Tuesday, February 21, 2017" pubdate="">
              Feb 21
          </time>

          <footer>
              <span class="categories">
                  Posted in <a href="https://andrew.gibiansky.com/blog/categories/machine-learning">machine-learning</a>
              </span>
          </footer>
      </article> */}



      <article class="ANDREW-GIBIANSKY-blog-archives">
          <h1>
              <a href="https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce">Bringing HPC Techniques to Deep Learning</a>
          </h1>

          <time datetime="Tuesday, February 21, 2017" pubdate="">
              Feb 21
          </time>

          <footer>
              <span class="categories">
                  Posted in <a class="category" href="https://andrew.gibiansky.com/blog/categories/machine-learning">machine-learning</a>
              </span>
          </footer>
      </article>

      <article class="ANDREW-GIBIANSKY-blog-archives">
          <h1>
              <a href="https://andrew.gibiansky.com/blog/machine-learning/nram-2/">NRAM: Theano Implementation</a>
          </h1>

          <time datetime="Tuesday, June 5, 2016" pubdate="">
              Jun 16
          </time>

          <footer>
              <span class="categories">
                  Posted in <a class="category" href="https://andrew.gibiansky.com/blog/categories/machine-learning">machine-learning</a>
              </span>
          </footer>
      </article>

      <article class="ANDREW-GIBIANSKY-blog-archives">
          <h1>
              <a href="https://andrew.gibiansky.com/blog/mathematics/cool-linear-algebra-singular-value-decomposition/">Cool Linear Algebra: Singular Value Decomposition</a>
          </h1>

          <time datetime="Wednesday, May 29, 2013" pubdate="">
           May 29, 2013
          </time>

          <footer>
              <span class="categories">
                  Posted in <a class="category" href="https://andrew.gibiansky.com/blog/categories/machine-learning">machine-learning</a>
              </span>
          </footer>
      </article>
      <a href="https://github.com/gibiansky/experiments">https://github.com/gibiansky/experiments</a>
      <p dir="auto"><strong>Projects</strong>:</p>

      {/* <ul dir="auto">
        <li>lbm/ - Simple implementation of the Lattice Boltzmann method; described a little bit on one of my blog posts.</li>
        <li>fluids/ - Experiments with a fluid simulation method known as Smoothed Particle Hydrodynamics. Includes a complete description of the simulation method, starting from fundamental fluid mechanics to derive the Navier-Stokes equations, followed by a derivation of the simulation steps from the Navier-Stokes equations. Also includes a very quick and dirty Java implementation of the simulation method. Also available as a pair of <a href="http://www.gibiansky.com/2011/07/computational-fluid-dynamics.html" rel="nofollow">blog posts</a> for more detail.</li>
        <li>morph/ - Experiments with simple image interpolation / morphing. Take a look at <a href="http://www.gibiansky.com/2011/07/image-morphing.html" rel="nofollow">the blog post</a> for more detail.</li>
        <li>neural-network/ - An implementation of a feed-forward neural network in MATLAB for handwritten digit recognition. For information on neural networks, take a look at the following <a href="http://www.gibiansky.com/2012/08/machine-learning-neural-networks.html" rel="nofollow">explanation</a>.</li>
        <li>cpu/ - A toy CPU created in Verilog for use with a Cyclone II Altera Starter Kit FPGA board. The CPU executes (compiled versions of) a custom MIPS-like assembly language; the compiler for this language and the description are in simple/.</li>
        <li>simple/ - A toy C-like language called "Simple", which compiles to a custom MIPS-like assembly, which can execute on a custom CPU for a Cyclone II FPGA board.</li>
        <li>quadcopter/ - A detailed description of quadcopter motion dynamics and the control used for quadcopter stabilization. Includes a simulation and movie.</li>
        </ul> */}

        <ul className={styles.card} class="ANDREW-GIBIANSKY-markdown-body" dir="auto">
            <li>lbm/ - Simple implementation of the Lattice Boltzmann method; described a little bit on one of my blog posts.</li>
            <li>fluids/ - Experiments with a fluid simulation method known as Smoothed Particle Hydrodynamics. Includes a complete description of the simulation method, starting from fundamental fluid mechanics to derive the Navier-Stokes equations, followed by a derivation of the simulation steps from the Navier-Stokes equations. Also includes a very quick and dirty Java implementation of the simulation method. Also available as a pair of <a href="http://www.gibiansky.com/2011/07/computational-fluid-dynamics.html" rel="nofollow">blog posts</a> for more detail.</li>
            <li>morph/ - Experiments with simple image interpolation / morphing. Take a look at <a href="http://www.gibiansky.com/2011/07/image-morphing.html" rel="nofollow">the blog post</a> for more detail.</li>
            <li>neural-network/ - An implementation of a feed-forward neural network in MATLAB for handwritten digit recognition. For information on neural networks, take a look at the following <a href="http://www.gibiansky.com/2012/08/machine-learning-neural-networks.html" rel="nofollow">explanation</a>.</li>
            <li>cpu/ - A toy CPU created in Verilog for use with a Cyclone II Altera Starter Kit FPGA board. The CPU executes (compiled versions of) a custom MIPS-like assembly language; the compiler for this language and the description are in simple/.</li>
            <li>simple/ - A toy C-like language called "Simple", which compiles to a custom MIPS-like assembly, which can execute on a custom CPU for a Cyclone II FPGA board.</li>
            <li>quadcopter/ - A detailed description of quadcopter motion dynamics and the control used for quadcopter stabilization. Includes a simulation and movie.</li>
        </ul>
        {/* Wrap the ul in a div with the card class */}
        <div className={styles.card}>
          <ul className={styles['ANDREW-GIBIANSKY-markdown-body']} dir="auto">
            <li>lbm/ - Simple implementation of the Lattice Boltzmann method; described a little bit on one of my blog posts.</li>
            <li>fluids/ - Experiments with a fluid simulation method known as Smoothed Particle Hydrodynamics. Includes a complete description of the simulation method, starting from fundamental fluid mechanics to derive the Navier-Stokes equations, followed by a derivation of the simulation steps from the Navier-Stokes equations. Also includes a very quick and dirty Java implementation of the simulation method. Also available as a pair of <a href="http://www.gibiansky.com/2011/07/computational-fluid-dynamics.html" rel="nofollow">blog posts</a> for more detail.</li>
            <li>morph/ - Experiments with simple image interpolation / morphing. Take a look at <a href="http://www.gibiansky.com/2011/07/image-morphing.html" rel="nofollow">the blog post</a> for more detail.</li>
            <li>neural-network/ - An implementation of a feed-forward neural network in MATLAB for handwritten digit recognition. For information on neural networks, take a look at the following <a href="http://www.gibiansky.com/2012/08/machine-learning-neural-networks.html" rel="nofollow">explanation</a>.</li>
            <li>cpu/ - A toy CPU created in Verilog for use with a Cyclone II Altera Starter Kit FPGA board. The CPU executes (compiled versions of) a custom MIPS-like assembly language; the compiler for this language and the description are in simple/.</li>
            <li>simple/ - A toy C-like language called "Simple", which compiles to a custom MIPS-like assembly, which can execute on a custom CPU for a Cyclone II FPGA board.</li>
            <li>quadcopter/ - A detailed description of quadcopter motion dynamics and the control used for quadcopter stabilization. Includes a simulation and movie.</li>
          </ul>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
