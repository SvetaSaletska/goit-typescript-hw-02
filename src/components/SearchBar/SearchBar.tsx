import React, { FormEvent } from 'react';
import css from '../SearchBar/SearchBar.module.css';
import { CiSearch } from 'react-icons/ci';
import toast from 'react-hot-toast';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = form.elements.namedItem('topic') as HTMLFormElement;

    if (data.value.trim() === '') {
      toast.error('EMPTY STRING');
      return;
    }

    onSearch(data.value.trim());
    form.reset();
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
