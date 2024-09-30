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
        <h1 class="AndrewGibiansky-header">
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
