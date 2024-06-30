import { useState, useEffect } from 'react';
import '../App/App.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { fetchImages } from '../articles-api';
import { ImageModal } from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import { Image } from '../types';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Image | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const searchImages = (newQuery: string): void => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setLoading(true);

        const data: Image[] = await fetchImages(query, page);
        console.log(data);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setSelectedCard(null);
    setIsOpen(false);
  };

  const onClickModal = (id: string) => {
    const clickedCard = images.find(item => item.id === id);
    if (clickedCard) {
      setSelectedCard(clickedCard);
      openModal();
    }
  };

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ImageGallery items={images} onSelectedcard={onClickModal} />
      {isOpen && selectedCard && (
        <ImageModal card={selectedCard} onClose={closeModal} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster />
    </div>
  );
};
