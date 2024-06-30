import css from '../SearchBar/SearchBar.module.css';
import { CiSearch } from 'react-icons/ci';
import toast from 'react-hot-toast';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      elements: {
        query: { value: string };
      };
      reset: () => void;
    };

    const inputValue = target.elements.query.value.trim();

    if (inputValue === '') {
      toast.error('EMPTY STRING');
      return;
    }

    onSearch(inputValue);
    target.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.wrap}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.btn}>
            <CiSearch className={css.icon} />
          </button>
        </div>
      </form>
    </header>
  );
};
