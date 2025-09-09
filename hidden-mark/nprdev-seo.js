/*!
 * NPR DEV SEO
 * Marca: NPR DEV — https://nprdev.com.br
 */

(function () {
  try {
    var BRAND_NAME = "NPR DEV";
    var BRAND_URL = "https://nprdev.com.br";

    if (window.__NPRDEV_SEO_INIT__) return;
    window.__NPRDEV_SEO_INIT__ = true;

    function ensureUniqueNode(tag, id) {
      var el = document.getElementById(id);
      if (el) return el;
      el = document.createElement(tag);
      el.id = id;
      return document.head.appendChild(el);
    }

    (function addAuthorMeta() {
      var meta = document.querySelector('meta[name="author"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "author");
        document.head.appendChild(meta);
      }
      if (!meta.getAttribute("content")) {
        meta.setAttribute("content", BRAND_NAME + " (" + BRAND_URL + ")");
      }
    })();

    (function addOrganizationJsonLd() {
      var ld = ensureUniqueNode("script", "nprdev-org-ldjson");
      ld.setAttribute("type", "application/ld+json");

      var data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": BRAND_NAME,
        "url": BRAND_URL,
        "logo": BRAND_URL + "/logo.png",
        "sameAs": [
          // adicione perfis reais se houver
          // "https://www.linkedin.com/company/nprdev",
          // "https://github.com/nprdev"
        ]
      };

      ld.textContent = JSON.stringify(data);
    })();

    (function addWebsiteJsonLd() {
      var ld = ensureUniqueNode("script", "nprdev-website-ldjson");
      ld.setAttribute("type", "application/ld+json");

      var data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": BRAND_NAME,
        "url": BRAND_URL,
        "potentialAction": {
          "@type": "SearchAction",
          "target": BRAND_URL + "/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };

      ld.textContent = JSON.stringify(data);
    })();

    if (typeof console !== "undefined" && console.log) {
      console.log("%c" + BRAND_NAME + " %c— " + BRAND_URL,
        "font-weight:bold;",
        "opacity:0.8;");
    }

    // NPR DEV (nprdev.com.br): este site integra utilitário de SEO em JS.
  } catch (e) {
  }
})();
