import create from 'zustand';
import basket from "@/app/basket/page.jsx";

export const useBasketStore = create((set) => ({
    basket: [],
    addToBasket: (product) => set((state) => ({ basket: [...state.basket, product] })),
    clearBasket: () => set({ basket: [] }),
    clearItem: (product) => set((state) => ({
        basket: state.basket.filter((item) => item.id !== product.id)
    })),
    updateCounter: (itemId, newCounter) =>
        set((state) => ({
            basket: state.basket.map((item) => (item.id === itemId ? { ...item, counter: newCounter } : item)),
        })),
    searchValue: '',
    searchResults: [],
    setSearchValue: (value) => set({ searchValue: value }),
    setSearchResults: (results) => set({ searchResults: results }),
}));

export const useAuthStore = create((set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}))

export const useDetailStore = create((set) => ({
    selectedProduct: null,
    setSelectedProduct: (product) => set({ selectedProduct: product }),
}));
