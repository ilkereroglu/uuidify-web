import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import TerminalBlock from '@site/src/components/TerminalBlock';
import FeatureCard from '@site/src/components/FeatureCard';
import UUIDBackground from '@site/src/components/UUIDBackground';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Ultra-fast, reliable, and open-source UUID generation API">

            {/* Hero Section */}
            <section className="hero-section">
                <UUIDBackground />
                <h1 className="hero-title">UUIDify.io</h1>
                <p className="hero-subtitle">
                    Ultra-Fast & Scalable UUID API on Serverless Infrastructure
                </p>

                <TerminalBlock />

                <div className="cta-container">
                    <Link to="/docs/intro" className="cta-button primary">
                        Get Started
                    </Link>
                    <a
                        href="https://github.com/ilkereroglu/uuidify"
                        className="cta-button secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="features-title">Key Features</h2>
                <div className="features-container">
                    <FeatureCard
                        icon="⚡"
                        title="Serverless & Lightning Fast"
                        description="Powered by Cloudflare Workers, offering near-zero latency and high availability across the globe."
                    />
                    <FeatureCard
                        icon="🔐"
                        title="Complete UUID Support"
                        description="Generates v1, v4 (default), v6, v7, and custom UUID formats tailored for modern databases."
                    />
                    <FeatureCard
                        icon="🌐"
                        title="Fully Open Source"
                        description="Transparent code base across the API and SDKs, encouraging community contributions and trust."
                    />
                </div>
            </section>

            {/* SDKs Section */}
            <section className="sdks-section">
                <h2 className="sdks-title">Official SDKs</h2>
                <p className="sdks-subtitle">
                    Integrate UUIDify seamlessly with our official client libraries
                </p>
                <div className="sdks-container">
                    <a
                        href="https://github.com/ilkereroglu/uuidify-go"
                        className="sdk-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="sdk-name">Go SDK</div>
                        <div className="sdk-language">For Go applications</div>
                    </a>
                    <a
                        href="https://github.com/ilkereroglu/uuidify-python"
                        className="sdk-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="sdk-name">Python SDK</div>
                        <div className="sdk-language">For Python applications</div>
                    </a>
                </div>
            </section>
        </Layout>
    );
}
