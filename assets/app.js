var k=globalThis,H=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),tt=new WeakMap,w=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(H&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&tt.set(e,t))}return t}toString(){return this.cssText}},et=r=>new w(typeof r=="string"?r:r+"",void 0,I),y=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new w(e,r,I)},st=(r,t)=>{if(H)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=k.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},z=H?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return et(e)})(r):r;var{is:_t,defineProperty:yt,getOwnPropertyDescriptor:bt,getOwnPropertyNames:vt,getOwnPropertySymbols:At,getPrototypeOf:Et}=Object,R=globalThis,it=R.trustedTypes,St=it?it.emptyScript:"",xt=R.reactiveElementPolyfillSupport,C=(r,t)=>r,D={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ot=(r,t)=>!_t(r,t),rt={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:ot};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&yt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=bt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let h=i?.call(this);o?.call(this,n),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,s=[...vt(e),...At(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(z(i))}else t!==void 0&&e.push(z(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return st(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:D).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:D;this._$Em=i;let h=n.fromAttribute(e,o.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){let n=this.constructor;if(i===!1&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??ot)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:n}=o,h=this[i];n!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,o,h)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[C("elementProperties")]=new Map,f[C("finalized")]=new Map,xt?.({ReactiveElement:f}),(R.reactiveElementVersions??=[]).push("2.1.2");var Y=globalThis,nt=r=>r,j=Y.trustedTypes,at=j?j.createPolicy("lit-html",{createHTML:r=>r}):void 0,ut="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,mt="?"+_,wt=`<${mt}>`,A=document,M=()=>A.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,Ct=r=>G(r)||typeof r?.[Symbol.iterator]=="function",L=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,b=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,pt=/"/g,ft=/^(?:script|style|textarea|title)$/i,K=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),$=K(1),Ht=K(2),Rt=K(3),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),dt=new WeakMap,v=A.createTreeWalker(A,129);function $t(r,t){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}var Pt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=P;for(let h=0;h<e;h++){let a=r[h],c,d,l=-1,m=0;for(;m<a.length&&(n.lastIndex=m,d=n.exec(a),d!==null);)m=n.lastIndex,n===P?d[1]==="!--"?n=lt:d[1]!==void 0?n=ht:d[2]!==void 0?(ft.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=b):d[3]!==void 0&&(n=b):n===b?d[0]===">"?(n=i??P,l=-1):d[1]===void 0?l=-2:(l=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?b:d[3]==='"'?pt:ct):n===pt||n===ct?n=b:n===lt||n===ht?n=P:(n=b,i=void 0);let g=n===b&&r[h+1].startsWith("/>")?" ":"";o+=n===P?a+wt:l>=0?(s.push(c),a.slice(0,l)+ut+a.slice(l)+_+g):a+_+(l===-2?h:g)}return[$t(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},U=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,h=t.length-1,a=this.parts,[c,d]=Pt(t,e);if(this.el=r.createElement(c,s),v.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=v.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(ut)){let m=d[n++],g=i.getAttribute(l).split(_),N=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:N[2],strings:g,ctor:N[1]==="."?F:N[1]==="?"?q:N[1]==="@"?V:x}),i.removeAttribute(l)}else l.startsWith(_)&&(a.push({type:6,index:o}),i.removeAttribute(l));if(ft.test(i.tagName)){let l=i.textContent.split(_),m=l.length-1;if(m>0){i.textContent=j?j.emptyScript:"";for(let g=0;g<m;g++)i.append(l[g],M()),v.nextNode(),a.push({type:2,index:++o});i.append(l[m],M())}}}else if(i.nodeType===8)if(i.data===mt)a.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(_,l+1))!==-1;)a.push({type:7,index:o}),l+=_.length-1}o++}}static createElement(t,e){let s=A.createElement("template");return s.innerHTML=t,s}};function S(r,t,e=r,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=O(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}var B=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??A).importNode(e,!0);v.currentNode=i;let o=v.nextNode(),n=0,h=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new T(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new W(o,this,t)),this._$AV.push(c),a=s[++h]}n!==a?.index&&(o=v.nextNode(),n++)}return v.currentNode=A,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},T=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),O(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement($t(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new B(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new U(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=nt(t).nextSibling;nt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},x=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=S(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{let h=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=S(this,h[s+a],e,a),c===E&&(c=this._$AH[a]),n||=!O(c)||c!==this._$AH[a],c===p?t=p:t!==p&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},F=class extends x{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},q=class extends x{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},V=class extends x{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??p)===E)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},W=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}};var Mt=Y.litHtmlPolyfillSupport;Mt?.(U,T),(Y.litHtmlVersions??=[]).push("3.3.3");var gt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new T(t.insertBefore(M(),o),o,void 0,e??{})}return i._$AI(r),i};var J=globalThis,u=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};u._$litElement$=!0,u.finalized=!0,J.litElementHydrateSupport?.({LitElement:u});var Ot=J.litElementPolyfillSupport;Ot?.({LitElement:u});(J.litElementVersions??=[]).push("4.2.2");var Z=class extends u{static styles=y`
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
  `;static properties={name:{type:String},email:{type:String},subject:{type:String},message:{type:String},status:{type:String},errorMessage:{type:String}};constructor(){super(),this.name="",this.email="",this.subject="General Inquiry",this.message="",this.status="idle",this.errorMessage=""}handleSubmit(t){if(t.preventDefault(),!this.name.trim()){this.errorMessage="Please provide your name.";return}if(!this.email.trim()||!this.email.includes("@")){this.errorMessage="Please enter a valid email address.";return}this.errorMessage="",this.status="submitting",setTimeout(()=>{this.status="success"},1200)}render(){return $`
      <form @submit="${this.handleSubmit}">
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Your name" 
            .value="${this.name}" 
            @input="${t=>this.name=t.target.value}"
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="hello@example.com" 
            .value="${this.email}" 
            @input="${t=>this.email=t.target.value}"
          />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            placeholder="General Inquiry" 
            .value="${this.subject}" 
            @input="${t=>this.subject=t.target.value}"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            placeholder="Tell us about your project" 
            .value="${this.message}" 
            @input="${t=>this.message=t.target.value}"
          ></textarea>
        </div>

        ${this.errorMessage?$`<div class="error-msg">${this.errorMessage}</div>`:""}

        ${this.status==="success"?$`
            <div class="toast success">
              <span>✓</span> Thank you! Your message has been sent successfully.
            </div>
          `:$`
            <button 
              type="submit" 
              class="btn-submit" 
              ?disabled="${this.status==="submitting"}"
            >
              ${this.status==="submitting"?"SENDING...":"SEND MESSAGE"}
            </button>
          `}
      </form>
    `}};customElements.define("portfolio-contact-form",Z);var Q=class extends u{static styles=y`
    :host {
      display: inline-block;
    }
  `;static properties={target:{type:Number},suffix:{type:String},current:{type:Number}};constructor(){super(),this.target=0,this.suffix="",this.current=0}firstUpdated(){let t=new IntersectionObserver(e=>{e[0].isIntersecting&&(this.animateCounter(),t.disconnect())});t.observe(this)}animateCounter(){let i=this.target/40,o=0,n=setInterval(()=>{o+=i,o>=this.target?(this.current=this.target,clearInterval(n)):this.current=Math.floor(o)},37.5)}render(){return $`<span>${this.current}${this.suffix}</span>`}};customElements.define("portfolio-stat-counter",Q);var X=class extends u{static styles=y`
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
  `;static properties={isOpen:{type:Boolean}};constructor(){super(),this.isOpen=!1}toggleMenu(){this.isOpen=!this.isOpen,this.isOpen?document.body.style.overflow="hidden":document.body.style.overflow=""}closeMenu(){this.isOpen=!1,document.body.style.overflow=""}render(){return $`
      <button 
        class="hamburger-btn ${this.isOpen?"open":""}" 
        @click="${this.toggleMenu}"
        aria-label="Toggle navigation menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="nav-drawer ${this.isOpen?"open":""}">
        <a href="/" @click="${this.closeMenu}">Work</a>
        <a href="/project.html" @click="${this.closeMenu}">Projects</a>
        <a href="/about.html" @click="${this.closeMenu}">About</a>
        <a href="/contact.html" @click="${this.closeMenu}">Contact</a>
      </div>
    `}};customElements.define("portfolio-mobile-nav",X);console.log("Architectural Portfolio Lit Components Initialized.");
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
