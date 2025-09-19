import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Ropanion - Your AI Companion for Roblox Studio</title>
        <meta name="description" content="AI-powered companion for Roblox Studio development" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            🚀 Now Available on Roblox
          </div>
          <h1 className={styles.title}>
            Meet <span className={styles.highlight}>AI Ropanion</span>
          </h1>
          <p className={styles.subtitle}>
            Your intelligent AI companion that transforms Roblox Studio development.
            Generate code, get instant help, and optimize your workflow with cutting-edge AI technology.
          </p>
          <div className={styles.heroButtons}>
            <a href="https://create.roblox.com/store/asset/112432781546778" className={styles.primaryButton} target="_blank" rel="noopener noreferrer">
              <span className={styles.buttonIcon}>🎮</span>
              Get on Roblox
            </a>
            <a href="#features" className={styles.secondaryButton}>
              Explore Features
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.apiCard}>
            <div className={styles.apiIcon}>🔑</div>
            <h3>Add Your API Key & Start Building</h3>
            <p>Connect your OpenRouter API key and unlock the full potential of AI-powered Roblox development. Generate scripts, get instant help, and accelerate your workflow with intelligent assistance.</p>
            <div className={styles.apiSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepText}>
                  <strong>Get your API key</strong><br/>
                  Sign up at OpenRouter and get your API key
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepText}>
                  <strong>Install AI Ropanion</strong><br/>
                  Download from Roblox Creator Store
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepText}>
                  <strong>Start building</strong><br/>
                  Use AI to enhance your Roblox development
                </div>
              </div>
            </div>
            <a href="https://create.roblox.com/store/asset/112432781546778" className={styles.apiButton} target="_blank" rel="noopener noreferrer">
              Get Started Now
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2>Powerful Features</h2>
          <p>Everything you need to supercharge your Roblox development</p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤖</div>
            <h3>Smart Code Generation</h3>
            <p>Generate complex Roblox scripts and models with AI assistance. From simple functions to entire game systems.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Real-time Help</h3>
            <p>Get instant answers to your Roblox development questions. Debug issues, learn best practices, and accelerate your learning.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎯</div>
            <h3>Workflow Optimization</h3>
            <p>Streamline your development process with intelligent suggestions, automated refactoring, and productivity enhancements.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔧</div>
            <h3>Advanced Tools</h3>
            <p>Access powerful development tools including code analysis, performance optimization, and collaborative features.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📚</div>
            <h3>Learning Resources</h3>
            <p>Built-in tutorials, documentation, and examples to help you master Roblox development with AI guidance.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌟</div>
            <h3>Premium Support</h3>
            <p>Get priority support, early access to new features, and direct communication with our development team.</p>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Transform Your Roblox Development?</h2>
          <p>Join thousands of developers who are already using AI Ropanion to build amazing experiences.</p>
          <a href="https://create.roblox.com/store/asset/112432781546778" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
            Get AI Ropanion Now
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.logoText}>AI Ropanion</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="#features">Features</a>
            <a href="https://create.roblox.com/store/asset/112432781546778" target="_blank" rel="noopener noreferrer">Get Started</a>
            <a href="#">Support</a>
          </div>
          <div className={styles.footerSocial}>
            <span>Follow us for updates</span>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 AI Ropanion. Powered by advanced AI technology for Roblox developers.</p>
        </div>
      </footer>
    </div>
  );
}