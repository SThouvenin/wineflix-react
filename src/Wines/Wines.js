import { useEffect, useState } from "react";
import WineListing from "./WineListing/WineListing";
const Wines = () => {
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

  const [drinkAgainArray, setDrinkAgainArray] = useState([]);
  const [keepDrinkingArray, setKeepDrinkingArray] = useState([]);

  useEffect(() => {
    const filterWines = () => {
      const drinkAgain = wines.filter((wine) => wine.isFinished);
      const keepDrinking = wines.filter((wine) => wine.progress);

      setDrinkAgainArray(drinkAgain);
      setKeepDrinkingArray(keepDrinking);
    };

    filterWines();
  }, []);

  return (
    <>
      {drinkAgainArray && (
        <WineListing
          wines={drinkAgainArray}
          imageUrl={wines.imageUrl}
          id={wines.id}
          progress={wines?.progress}
          isNew={wines?.isNew}
          sectionTitle={"Drink Again"}
        />
      )}
      {keepDrinkingArray && (
        <WineListing
          wines={keepDrinkingArray}
          imageUrl={wines.imageUrl}
          id={wines.id}
          progress={wines?.progress}
          isNew={wines?.isNew}
          sectionTitle={"Keep Drinking"}
        />
      )}
    </>
  );
};

export default Wines;
