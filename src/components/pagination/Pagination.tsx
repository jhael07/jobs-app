import { SetStateAction } from "react";

interface Pages {
  totalCards: number;
  cardsPerPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

const Pagination = ({ totalCards, cardsPerPage, setCurrentPage }: Pages) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="w-full p-2 border mt-2 flex gap-3  bg-gray-100 justify-end">
      {pages.map((page, index) => {
        return (
          <button key={index} className="bg-white p-1 hover:bg-blue-400 hover:text-white px-3 border rounded-md" onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
