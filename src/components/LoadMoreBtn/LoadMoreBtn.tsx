import css from '../LoadMoreBtn/LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      Load More
    </button>
  );
};
