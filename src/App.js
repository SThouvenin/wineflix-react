import "./App.css";
import Header from "./Header/Header";
import WineListing from "./Wines/WineListing/WineListing";
import Wines from "./Wines/Wines";

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
      <WineListing imageUrl={wines.imageUrl} id={wines.id} progress={wines.progress} isNew={wines.isNew} />
    </div>
  );
};

export default App;
