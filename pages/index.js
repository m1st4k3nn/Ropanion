import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Ropanion - Your AI Companion for Roblox Studio</title>
        <meta name="description" content="AI-powered companion for Roblox Studio development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>AI Ropanion</span>
        </h1>

        <p className={styles.description}>
          Your intelligent AI companion for Roblox Studio development.
          Enhance your workflow with AI-powered assistance.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Smart Code Generation</h2>
            <p>Generate Roblox scripts and models with AI assistance</p>
          </div>

          <div className={styles.card}>
            <h2>Real-time Help</h2>
            <p>Get instant answers to your Roblox development questions</p>
          </div>

          <div className={styles.card}>
            <h2>Workflow Optimization</h2>
            <p>Streamline your development process with intelligent suggestions</p>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="#" className={styles.button}>Get Started</a>
          <a href="#" className={styles.link}>Learn More</a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by AI • Built for Roblox Developers</p>
      </footer>
    </div>
  );
}