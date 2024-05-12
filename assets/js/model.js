// Função para adicionar o cabeçalho (head)
function addHead() {
    const headHTML = `
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      <link rel="icon" href="assets/img/favicon-malta-2.png">
      <link rel="stylesheet" href="assets/css/style.css">
    `;
    // Adiciona o cabeçalho na Tag <head>
    document.head.innerHTML = headHTML;
  }
  
  // chama o Header
  function addHeader() {
    const headerHTML = `
<header>
    <div class="menu__wrapper">
        <div class="menu__bar">
            <a href="#" title="Logo" class="logoa">
                <img id="logo-header" src="assets/img/rsv - logo.png" alt="Logo Reserva">
            </a>
            <img class="menu-icon" src="assets/img/burger-menu.svg" title='Burger Menu' alt='Burger Menu'
                onclick="toggleMenu(this)">
            <ul class="navigation">
                <li>
                    <a href="#services" title="Services">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#blog" title="Blog">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="#about" title="About">
                        About
                    </a>
                </li>
                <li>
                    <a href="#contact-us" title="Contact Us">
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    </div>
</header>
    `;
  
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }
  
  // Função para adicionar o footer
  function addFooter() {
    const footerHTML = `
    <section style="background-color: #ba0f14;" id="section-footer">
        <footer class="bottom">
            <div class="legal">
                <span> ©2024. <a href="#">Reserva Marketing Digital</a> - Todos os Direitos Reservados </span>
                <a href="https://faculdademalta.edu.br/politica-de-privacidade/"> Termos de Privacidade </a>
            </div>
            <div class="links">
                <a class="fa-brands fa-instagram text-light social-icon"
                    href="https://www.instagram.com/reservamarketingdigital/" target="_blank"></a>
            </div>
        </footer>
    </section>
    `;
  
    // Adiciona o footer no final do body
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
  
  // Chama as funções quando a página for carregada
  window.onload = function () {
    addHeader();
    addHead();
    addFooter();
  };
  