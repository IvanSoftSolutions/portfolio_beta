import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJs, faNodeJs, faReact, faPython, faAws, faApple, faAndroid, faGithub, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faJs, faNodeJs, faReact, faPython, faAws, faApple, faAndroid, faDatabase, faGithub, faTwitter, faInstagram, faTiktok, faEnvelope);

function App() {
  return (
    <div className="App">
      <body>
        <header role="banner" class="ui-section-header">
          <div className="ui-layout-container">
            <div class="ui-section-header__layout ui-layout-flex">
              {/* LOGO */}
              {/* <a href="#" role="link" aria-label="#" class="ui-section-header--logo">
                <svg viewBox="0 0 18 18" height="18" width="18" role="img" aria-label="#">
                  <path fill="#353535" d="M0 0h4.5v9a4.5 4.5 0 109 0V6H18v3A9 9 0 110 9V0zm18 4.5V0h-4.5v4.5H18z" />
                </svg>
              </a> */}
              {/* MENU */}
              <nav class="ui-section-header--nav ui-layout-flex">
                <a href="#projects" aria-label="#" class="ui-section-header--nav-link">Proyectos</a>
                <a href="#contact" aria-label="#" class="ui-section-header--nav-link">Contacto</a>
              </nav>
            </div>
          </div>
        </header>
        <main>
          <section class="ui-section-hero">
            <div class="ui-layout-container">
              <div class="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
                {/* COPYWRITING */}
                <div>
                  <h1>Ivan Daniel </h1>
                  <h1>Hernandez Rocha</h1>
                  <p class="ui-text-intro">Ingeniero en Sistemas Computacionales </p>
                  <p class="ui-text-intro">Desarrollador de Software</p>
                  {/* CTA */}
                  <div class="ui-component-cta ui-layout-flex">
                    <a href="#contact" aria-label="#"
                      class="ui-component-button ui-component-button-normal ui-component-button-primary">Contactar</a>
                  </div>
                </div>
                {/* IMAGE */}
                <img src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png" loading="lazy" alt="#"
                  class="ui-image-half-right" />
              </div>
            </div>
          </section>
          <section class="ui-section-stack">
            <div class="ui-layout-container">
              <div class="ui-section-stack__layout ui-layout-flex">
                <FontAwesomeIcon icon="fa-brands fa-js" style={{ height: "5em" }} />
                <FontAwesomeIcon icon="fa-brands fa-node-js" style={{ height: "5em" }} />
                <FontAwesomeIcon icon="fa-brands fa-react" style={{ height: "5em" }} />
                <FontAwesomeIcon icon="fa-brands fa-python" style={{ height: "5em" }} />
                <FontAwesomeIcon icon="fa-solid fa-database" style={{ height: "5em" }} />
                <FontAwesomeIcon icon="fa-brands fa-aws" style={{ height: "5em" }} />
                <FontAwesomeIcon icon="fa-brands fa-apple" style={{ height: "5em" }} />
                <FontAwesomeIcon icon="fa-brands fa-android" style={{ height: "5em" }} />
              </div>
            </div>
          </section>
          <section id="projects" class="ui-section-feature">
            <div class="ui-layout-container">
              <div class="ui-layout-flex ui-layout-projects">
                <h2>Proyectos</h2>
              </div>
              <div class="ui-section-hero__layout ui-layout-flex ui-layout-projects">
                <p>Aplicaciones Web, Moviles y de Escritorio, Bases de Datos, APIs, Automatizacion de Procesos, etc</p>
              </div>
              <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-3">
                <Card class="ui-component-card ui-component-card--feature" sx={{ minWidth: 275 }}>
                  <CardContent>
                    <img src="https://res.cloudinary.com/uisual/image/upload/assets/graphics/notification.png" alt="#"
                      loading="lazy" />
                    <div class="ui-component-card--feature-content">
                      <h4 class="ui-component-card--feature-title">Lorem ipsum dolor.</h4>
                      <p>Lorem ipsum dolor sit amet sed eiusmod tempor incididunt.</p>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" spacing={21}>
                      <Button size="small">Pruebame!</Button>
                      <Button size="small"><FontAwesomeIcon icon="fa-brands fa-github" size='2xl' style={{ color: "#f5f5f5" }} /></Button>
                    </Stack>
                  </CardActions>
                </Card>
                <Card class="ui-component-card ui-component-card--feature" sx={{ minWidth: 275 }}>
                  <CardContent>
                    <img src="https://res.cloudinary.com/uisual/image/upload/assets/graphics/notification.png" alt="#"
                      loading="lazy" />
                    <div class="ui-component-card--feature-content">
                      <h4 class="ui-component-card--feature-title">Lorem ipsum dolor.</h4>
                      <p>Lorem ipsum dolor sit amet sed eiusmod tempor incididunt.</p>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" spacing={21}>
                      <Button size="small">Pruebame!</Button>
                      <Button size="small"><FontAwesomeIcon icon="fa-brands fa-github" size='2xl' style={{ color: "#f5f5f5" }} /></Button>
                    </Stack>
                  </CardActions>
                </Card>
                <Card class="ui-component-card ui-component-card--feature" sx={{ minWidth: 275 }}>
                  <CardContent>
                    <img src="https://res.cloudinary.com/uisual/image/upload/assets/graphics/notification.png" alt="#"
                      loading="lazy" />
                    <div class="ui-component-card--feature-content">
                      <h4 class="ui-component-card--feature-title">Lorem ipsum dolor.</h4>
                      <p>Lorem ipsum dolor sit amet sed eiusmod tempor incididunt.</p>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" spacing={21}>
                      <Button size="small">Pruebame!</Button>
                      <Button size="small"><FontAwesomeIcon icon="fa-brands fa-github" size='2xl' style={{ color: "#f5f5f5" }} /></Button>
                    </Stack>
                  </CardActions>
                </Card>
              </div>
            </div>
          </section>
          <section id="contact" class="ui-section-contact">
            <div class="ui-layout-container">
              <div class="ui-layout-flex ui-layout-projects">
                <h2>Informacion de contacto</h2>
              </div>
              <div class="ui-section-contact__layout ui-layout-grid ui-layout-grid-2">
                <div>
                  <div class="ui-layout-flex">
                    <Button size="small"><FontAwesomeIcon icon="fa-brands fa-github" size='2xl' style={{ color: "#f5f5f5" }} /></Button>
                  </div>
                  <p>@ivandelmal123</p>
                </div>
                <div>
                  <div class="ui-layout-flex">
                    <Button size="small"><FontAwesomeIcon icon="fa-brands fa-twitter" size='2xl' /></Button>
                  </div>
                  <p>@ivandelmal123</p>
                </div>
                <div>
                  <div class="ui-layout-flex">
                    <Button size="small"><FontAwesomeIcon icon="fa-brands fa-instagram" size='2xl' style={{ color: "#d62976" }} /></Button>
                  </div>
                  <p>@ivandelmal123</p>
                </div>
                <div>
                  <div class="ui-layout-flex">
                    <Button size="small"><FontAwesomeIcon icon="fa-brands fa-tiktok" size='2xl' style={{ color: "#f5f5f5" }} /></Button>
                  </div>
                  <p>@ivandelmal123</p>
                </div>
                <div>
                  <div class="ui-layout-flex">
                    <Button size="small"><FontAwesomeIcon icon="fa-solid fa-envelope" size='2xl' style={{ color: "#696969" }} /></Button>
                  </div>
                  <p>@ivandelmal123</p>
                </div>
              </div>
              <div class="ui-layout-container">
                <h2 class="ui-section-contact--note">Send a comment:</h2>
                <form method="post" action="">
                  <fieldset>
                    <label for="email">Email:
                      <input id="email" type="text" />
                    </label>
                    <label for="comment">Comment:
                      <textarea id="comment" rows="10" cols="30"></textarea>
                    </label>
                  </fieldset>
                  <input type="submit" value="Enviar" />
                </form>
              </div>
            </div>
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
