import React from 'react';
import './GridPage.css';

const GridPage = () => {
  return (
    <div className="grid-container">
      <header>
        <h1>Grid</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>

      <aside>
        <ul>
          <li>Profile</li>
          <li>Message</li>
          <li>Notification</li>
          <li>Task</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main>
        <section>
          <h1> Welcome Grid template Page </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            nam, optio corrupti nemo natus tempora, incidunt vero quasi quidem,
            veritatis necessitatibus nobis architecto assumenda? Ex quos
            quisquam provident aliquid fugiat.
          </p>
        </section>
        <section className="cards">
          <div className="card">
            <div className="img-container"></div>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              omnis at amet rerum ea est?
            </p>
            <button>Click Here</button>
          </div>
          <div className="card">
            <div className="img-container"></div>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              maiores fuga natus, error illum odit! Autem ipsa illo deserunt
              labore!
            </p>
            <button>Click Here</button>
          </div>
          <div className="card">
            <div className="img-container"></div>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis eligendi non beatae voluptates officia, itaque alias
              deserunt sequi asperiores fuga adipisci! Reiciendis rem eveniet
              eligendi.
            </p>
            <button>Click Here</button>
          </div>
        </section>
      </main>
      <footer>
        <ul>
          <li>Contact</li>
          <li>Privacy policy</li>
          <li>About</li>
        </ul>
      </footer>
    </div>
  );
};

export default GridPage;
