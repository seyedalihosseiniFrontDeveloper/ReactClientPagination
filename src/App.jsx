import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
// import "./App.css";
import usePaginationFetch from "./Hooks/usePaginationFetch";
import Pagination from "./components/Pagination/Pagination";
const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";

function App() {
  const [loading, data] = usePaginationFetch(url, 2);
  const [page, setPage] = useState(1);
  const [programmers, setProgrammers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setProgrammers(data[page - 1]);
  }, [loading, page]);

  return (
    <section className="container pt-5">
      {loading && (
        <section className="d-flex justify-content-center">
          <section className="spinner-border"></section>
        </section>
      )}

      {!loading && (
        <>
          <section className="row d-flex justify-content-center">
            {programmers.map(({ id, ...programmer }) => {
              return (
                <section className="col-3" key={id}>
                  <Card {...programmer} />
                </section>
              );
            })}
          </section>
          <section className="row">
            <Pagination
              pages={data.length}
              setPage={setPage}
              activePage={page}
            />
          </section>
        </>
      )}
    </section>
  );
}

export default App;
