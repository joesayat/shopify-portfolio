import { LitElement, html, css } from 'lit';

export class PortfolioMobileNav extends LitElement {
  static styles = css`
    :host {
      display: none;
    }

    @media (max-width: 768px) {
      :host {
        display: block;
      }
    }

    .hamburger-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 5px;
      z-index: 1001;
    }

    .bar {
      width: 24px;
      height: 2px;
      background-color: #111111;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .hamburger-btn.open .bar:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .hamburger-btn.open .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger-btn.open .bar:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    .nav-drawer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #F8F8F6;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.35s ease, visibility 0.35s ease;
    }

    .nav-drawer.open {
      opacity: 1;
      visibility: visible;
    }

    .nav-drawer a {
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      color: #111111;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .nav-drawer a:hover {
      opacity: 0.6;
    }
  `;

  static properties = {
    isOpen: { type: Boolean }
  };

  constructor() {
    super();
    this.isOpen = false;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isOpen = false;
    document.body.style.overflow = '';
  }

  render() {
    return html`
      <button 
        class="hamburger-btn ${this.isOpen ? 'open' : ''}" 
        @click="${this.toggleMenu}"
        aria-label="Toggle navigation menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="nav-drawer ${this.isOpen ? 'open' : ''}">
        <a href="/" @click="${this.closeMenu}">Work</a>
        <a href="/project.html" @click="${this.closeMenu}">Projects</a>
        <a href="/about.html" @click="${this.closeMenu}">About</a>
        <a href="/contact.html" @click="${this.closeMenu}">Contact</a>
      </div>
    `;
  }
}

customElements.define('portfolio-mobile-nav', PortfolioMobileNav);
