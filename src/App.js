import "./App.css";
import Header from "./Header/Header";

const App = () => {
  const wines = [
    {
      id: 1,
      imageUrl: "/red-wine.jpg",
      isNew: true,
      label: "Wine",
      isFinished: true,
    },
    {
      id: 2,
      imageUrl: "/red-wine.jpg",
      label: "Wine",
      isFinished: true,
    },
    {
      id: 3,
      imageUrl: "/red-wine.jpg",
      label: "Wine",
      isNew: true,
      isFinished: true,
    },
    {
      id: 4,
      imageUrl: "/red-wine.jpg",
      label: "Wine",
      isFinished: true,
    },
    {
      id: 5,
      imageUrl: "/red-wine.jpg",
      label: "Wine",
      isNew: true,
      isFinished: true,
    },
    {
      id: 6,
      imageUrl: "/red-wine.jpg",
      label: "Wine",
      isFinished: true,
    },
    {
      id: 7,
      imageUrl: "/red-wine.jpg",
      label: "Wine",
      isFinished: true,
    },
    {
      id: 8,
      imageUrl: "/red-wine.jpg",
      label: "Wine",
      isFinished: true,
    },
    {
      id: 1,
      imageUrl: "/red-wine.jpg",
      progress: 22,
      label: "Wine",
    },
    {
      id: 2,
      imageUrl: "/red-wine.jpg",
      progress: 22,
      label: "Wine",
    },
    {
      id: 3,
      imageUrl: "/red-wine.jpg",
      progress: 22,
      label: "Wine",
    },
    {
      id: 4,
      imageUrl: "/red-wine.jpg",
      progress: 22,
      label: "Wine",
    },
    {
      id: 5,
      imageUrl: "/red-wine.jpg",
      progress: 22,
      label: "Wine",
    },
    {
      id: 6,
      imageUrl: "/red-wine.jpg",
      progress: 22,
      label: "Wine",
    },
    {
      id: 7,
      imageUrl: "/red-wine.jpg",
      progress: 22,
      label: "Wine",
    },
    {
      id: 8,
      imageUrl: "/red-wine.jpg",
      progress: 22,
      label: "Wine",
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <section className="category">
          <h2>Drink Again</h2>
          <ul>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <span className="new-badge">New!</span>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <span className="new-badge">New!</span>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <span className="new-badge">New!</span>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
          </ul>
        </section>
        <section className="category">
          <h2>Keep Drinking</h2>
          <ul>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
