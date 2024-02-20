import css from '../SearchBox/SearchBox.module.css';

export const SearchBox = ({ value, onChange, text }) => {
  return (
    <div className={css.filter}>
      <p className={css.text}>{text}</p>
      <input
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};
