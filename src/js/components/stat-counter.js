import { LitElement, html, css } from 'lit';

export class PortfolioStatCounter extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  static properties = {
    target: { type: Number },
    suffix: { type: String },
    current: { type: Number }
  };

  constructor() {
    super();
    this.target = 0;
    this.suffix = '';
    this.current = 0;
  }

  firstUpdated() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.animateCounter();
        observer.disconnect();
      }
    });
    observer.observe(this);
  }

  animateCounter() {
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    const increment = this.target / steps;
    let count = 0;

    const timer = setInterval(() => {
      count += increment;
      if (count >= this.target) {
        this.current = this.target;
        clearInterval(timer);
      } else {
        this.current = Math.floor(count);
      }
    }, stepTime);
  }

  render() {
    return html`<span>${this.current}${this.suffix}</span>`;
  }
}

customElements.define('portfolio-stat-counter', PortfolioStatCounter);
