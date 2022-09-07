import logo from './logo.svg';
import "./index.css";
import './App.css';
import { addOffers, selectOffers } from "./features/offers/slice-offers";
import { useDispatch, useSelector } from "react-redux";
import { FilterPanel } from "./features/filtres/FilterPanel";
import { JobList } from "./features/offers/JobList";
import { Header } from "./Components/Header";
import { useEffect } from "react";
import data from "./data/data.json";
function App() {
  const dispatch = useDispatch();
  const store = useSelector(selectOffers);
  useEffect(() => {
    dispatch(addOffers(data))
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
