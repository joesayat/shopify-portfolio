import { LitElement, html, css } from 'lit';

export class PortfolioContactForm extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .form-group {
      margin-bottom: 2.5rem;
    }
    
    label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #888888;
      display: block;
      margin-bottom: 0.75rem;
      font-weight: 500;
      font-family: 'Inter', sans-serif;
    }
    
    input[type="text"],
    input[type="email"],
    textarea {
      width: 100%;
      box-sizing: border-box;
      background: transparent;
      border: 1px solid #E5E5E2;
      padding: 1rem 1.2rem;
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      color: #111111;
      border-radius: 4px;
      outline: none;
      transition: all 0.3s ease;
    }
    
    input:focus, textarea:focus {
      border-color: #111111;
      box-shadow: 0 0 0 1px #111111;
    }
    
    textarea {
      min-height: 120px;
      resize: vertical;
    }
    
    .btn-submit {
      background-color: #111111;
      color: #FFFFFF;
      border: none;
      padding: 1.2rem 2.8rem;
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 2px;
    }
    
    .btn-submit:hover {
      background-color: #333333;
      transform: translateY(-2px);
    }
    
    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .toast {
      margin-top: 1.5rem;
      padding: 1rem 1.5rem;
      border-radius: 4px;
      font-size: 0.9rem;
      font-family: 'Inter', sans-serif;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .toast.success {
      background-color: #E8F5E9;
      color: #2E7D32;
      border: 1px solid #C8E6C9;
    }

    .error-msg {
      color: #D32F2F;
      font-size: 0.75rem;
      margin-top: 0.4rem;
      font-family: 'Inter', sans-serif;
    }
  `;

  static properties = {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
    status: { type: String }, // 'idle' | 'submitting' | 'success'
    errorMessage: { type: String }
  };

  constructor() {
    super();
    this.name = '';
    this.email = '';
    this.subject = 'General Inquiry';
    this.message = '';
    this.status = 'idle';
    this.errorMessage = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.name.trim()) {
      this.errorMessage = 'Please provide your name.';
      return;
    }
    if (!this.email.trim() || !this.email.includes('@')) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }
    
    this.errorMessage = '';
    this.status = 'submitting';

    setTimeout(() => {
      this.status = 'success';
    }, 1200);
  }

  render() {
    return html`
      <form @submit="${this.handleSubmit}">
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Your name" 
            .value="${this.name}" 
            @input="${e => this.name = e.target.value}"
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="hello@example.com" 
            .value="${this.email}" 
            @input="${e => this.email = e.target.value}"
          />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            placeholder="General Inquiry" 
            .value="${this.subject}" 
            @input="${e => this.subject = e.target.value}"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            placeholder="Tell us about your project" 
            .value="${this.message}" 
            @input="${e => this.message = e.target.value}"
          ></textarea>
        </div>

        ${this.errorMessage ? html`<div class="error-msg">${this.errorMessage}</div>` : ''}

        ${this.status === 'success' 
          ? html`
            <div class="toast success">
              <span>✓</span> Thank you! Your message has been sent successfully.
            </div>
          `
          : html`
            <button 
              type="submit" 
              class="btn-submit" 
              ?disabled="${this.status === 'submitting'}"
            >
              ${this.status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          `
        }
      </form>
    `;
  }
}

customElements.define('portfolio-contact-form', PortfolioContactForm);
