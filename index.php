<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TriviaVault - Earn Real Rewards Playing Knowledge-Based Challenges</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo">
                    <div class="logo-icon">TV</div>
                    <span class="logo-text">TriviaVault</span>
                </a>
                
                <nav class="nav-desktop">
                    <a href="index.html" class="nav-link active">Home</a>
                    <a href="how-it-works.html" class="nav-link">Platform Guide</a>
                    <a href="quizzes.html" class="nav-link">Challenges</a>
                    <a href="prizes.html" class="nav-link">Rewards</a>
                    <a href="about.html" class="nav-link">Company</a>
                    <a href="contact.html" class="nav-link">Support</a>
                </nav>

                <div class="header-actions">
                    <a href="wallet.html" class="wallet-btn">
                        <span class="wallet-icon">💳</span>
                        <span class="wallet-points">0 pts</span>
                    </a>
                    <a href="quizzes.html" class="btn-primary">Get Started</a>
                </div>

                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                    <span class="menu-icon">☰</span>
                </button>
            </div>
        </div>

        <div class="mobile-menu" id="mobileMenu">
            <a href="index.html" class="mobile-nav-link active">Home</a>
            <a href="how-it-works.html" class="mobile-nav-link">Platform Guide</a>
            <a href="quizzes.html" class="mobile-nav-link">Challenges</a>
            <a href="prizes.html" class="mobile-nav-link">Rewards</a>
            <a href="about.html" class="mobile-nav-link">Company</a>
            <a href="contact.html" class="mobile-nav-link">Support</a>
            <a href="wallet.html" class="mobile-nav-link wallet-mobile">
                <span>💳</span> <span class="wallet-points-mobile">0 Points</span>
            </a>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1 class="gradient-text animate-in">Test Your Knowledge,<br>Earn Real Rewards</h1>
                    <p class="hero-description animate-in">
                        Join thousands of knowledge enthusiasts who are monetizing their expertise through our 
                        innovative trivia platform. Answer questions correctly and convert your points into real money.
                    </p>
                    
                    <div class="hero-badges animate-in">
                        <div class="badge">
                            <span>🆓</span> Zero Cost Entry
                        </div>
                        <div class="badge">
                            <span>⚡</span> Instant Rewards
                        </div>
                        <div class="badge">
                            <span>🎯</span> 100% Transparent
                        </div>
                        <div class="badge">
                            <span>💎</span> Verified Payouts
                        </div>
                    </div>

                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="quizzes.html" class="btn-primary btn-large">
                            Explore Challenges
                        </a>
                        <a href="how-it-works.html" class="btn-secondary btn-large">
                            Learn More
                        </a>
                    </div>

                    <div class="trust-badges">
                        <div class="trust-item">
                            <span>✓</span> No Hidden Fees
                        </div>
                        <div class="trust-item">
                            <span>✓</span> Secure Platform
                        </div>
                        <div class="trust-item">
                            <span>✓</span> Real Money Payouts
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section style="padding: 4rem 0; background: rgba(30, 41, 59, 0.3);">
            <div class="container">
                <div class="section-header">
                    <h2 class="gradient-text">Why TriviaVault Stands Out</h2>
                    <p class="section-subtitle">
                        Experience a knowledge-based earning platform built on fairness, transparency, and real value
                    </p>
                </div>

                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">💸</div>
                        <h3>100% Free Access</h3>
                        <p>
                            No registration fees, no subscription costs, no payment requirements. Access our entire 
                            challenge library completely free and start earning immediately.
                        </p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🏆</div>
                        <h3>Guaranteed Earnings</h3>
                        <p>
                            Every correct answer earns you 100 points. No lottery system, no competition ranks - 
                            just straightforward rewards based purely on your knowledge.
                        </p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <h3>Clear Point System</h3>
                        <p>
                            Simple conversion: 1000 points equals ₹1 INR. Track your earnings in real-time, 
                            cashout anytime you reach the minimum threshold.
                        </p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔒</div>
                        <h3>Secure & Private</h3>
                        <p>
                            Bank-grade encryption protects your data. We never sell your information. 
                            Your privacy and security are our highest priorities.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works Preview -->
        <section style="padding: 4rem 0;">
            <div class="container">
                <div class="section-header">
                    <h2 class="gradient-text">Simple 4-Step Process</h2>
                    <p class="section-subtitle">
                        Start earning with your knowledge in under 5 minutes
                    </p>
                </div>

                <div class="steps-grid">
                    <div class="step">
                        <div class="step-number">1</div>
                        <h3>Browse Challenges</h3>
                        <p>
                            Select from diverse trivia categories including science, entertainment, history, 
                            geography, and more. Each challenge contains 10-15 curated questions.
                        </p>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <h3>Answer Questions</h3>
                        <p>
                            Take your time with each question (30 seconds per question). Choose from multiple-choice 
                            options and submit your answer for immediate feedback.
                        </p>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <h3>Accumulate Points</h3>
                        <p>
                            Earn 100 points for every correct response. Your points are automatically saved 
                            to your secure wallet and tracked in real-time.
                        </p>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <h3>Request Payout</h3>
                        <p>
                            Convert accumulated points to INR once you reach 1000 points. Receive verified 
                            payments directly to your registered account.
                        </p>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 3rem;">
                    <a href="how-it-works.html" class="btn-primary btn-large">
                        View Complete Guide
                    </a>
                </div>
            </div>
        </section>

        <!-- Rewards Showcase -->
        <section style="padding: 4rem 0; background: rgba(30, 41, 59, 0.3);">
            <div class="container">
                <div class="section-header">
                    <h2 class="gradient-text">Real Rewards, Real Money</h2>
                    <p class="section-subtitle">
                        Turn your knowledge into tangible earnings with our transparent reward structure
                    </p>
                </div>

                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">💰</div>
                        <h3>Cash Rewards</h3>
                        <p>
                            Convert your earned points directly into Indian Rupees. Simple conversion rate: 
                            1000 points = ₹1 INR. No complicated formulas or hidden deductions.
                        </p>
                        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(13, 148, 136, 0.1); border-radius: 8px; border: 1px solid var(--primary-teal);">
                            <p style="font-weight: 700; color: var(--primary-teal); margin: 0;">1000 Points = ₹1 INR</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📈</div>
                        <h3>Unlimited Earning Potential</h3>
                        <p>
                            No daily limits, no monthly caps. Participate in as many challenges as you want. 
                            The more you play, the more you earn. Your knowledge is your currency.
                        </p>
                        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(234, 88, 12, 0.1); border-radius: 8px; border: 1px solid var(--accent-orange);">
                            <p style="font-weight: 700; color: var(--accent-orange); margin: 0;">No Earning Limits</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>Fast Withdrawals</h3>
                        <p>
                            Request cashouts anytime you reach the minimum threshold. Process times typically 
                            range from 1-3 business days depending on your payment method.
                        </p>
                        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(30, 64, 175, 0.1); border-radius: 8px; border: 1px solid var(--primary-blue);">
                            <p style="font-weight: 700; color: var(--primary-blue); margin: 0;">1-3 Day Processing</p>
                        </div>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 3rem;">
                    <a href="prizes.html" class="btn-primary btn-large">
                        Explore Reward Details
                    </a>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section style="padding: 5rem 0;">
            <div class="container">
                <div class="card-highlight" style="padding: 4rem 2rem;">
                    <div style="max-width: 48rem; margin: 0 auto; text-align: center;">
                        <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Ready to Monetize Your Knowledge?</h2>
                        <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2.5rem;">
                            Join our community of knowledge earners today. No credit card required, no commitments - 
                            just your expertise and our rewards system.
                        </p>
                        <a href="quizzes.html" class="btn-primary btn-large">
                            Start Your First Challenge
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-logo">
                        <div class="logo-icon">TV</div>
                        <span class="logo-text">TriviaVault</span>
                    </div>
                    <p>A revolutionary platform where knowledge meets earnings. Answer trivia questions and convert your expertise into real money rewards.</p>
                </div>
                <div class="footer-col">
                    <h3>Navigate</h3>
                    <a href="index.html">Home</a>
                    <a href="how-it-works.html">Platform Guide</a>
                    <a href="quizzes.html">Challenges</a>
                    <a href="prizes.html">Rewards</a>
                </div>
                <div class="footer-col">
                    <h3>Information</h3>
                    <a href="about.html">About TriviaVault</a>
                    <a href="contact.html">Contact Support</a>
                    <a href="terms.html">Terms of Service</a>
                    <a href="privacy.html">Privacy Policy</a>
                </div>
                <div class="footer-col">
                    <h3>Get in Touch</h3>
                    <p>📧 hello@triviavault.com</p>
                    <p>📞 +1 (929) 342-3821</p>
                    <p>📍 New York, NY, USA</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 TriviaVault. All rights reserved worldwide.</p>
            </div>
        </div>
    </footer>

    <script src="wallet.js"></script>
    <script src="main.js"></script>
</body>
</html>
