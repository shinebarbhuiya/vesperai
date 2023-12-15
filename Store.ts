import create from 'zustand';

interface StoreState {
  imageUrl: string;
  setImageUrl: (newImageUrl: string) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;

  imageLoading: boolean;
  setImageLoading: (imageLoading: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  imageUrl: '',
  setImageUrl: (newImageUrl) => set({ imageUrl: newImageUrl }),
  loading: false,
  setLoading: (loading) => set({ loading }),

  imageLoading: false,
  setImageLoading: (imageLoading) => set({ imageLoading }),


}));

export default useStore;