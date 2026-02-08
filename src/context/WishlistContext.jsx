import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export function useWishlist() {
    return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    // Load from local storage on mount (simulated persistence)
    useEffect(() => {
        const saved = localStorage.getItem('vibestey_wishlist');
        if (saved) {
            setWishlist(JSON.parse(saved));
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem('vibestey_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (property) => {
        setWishlist(prev => {
            if (prev.find(p => p.id === property.id)) return prev;
            return [...prev, property];
        });
        setIsWishlistOpen(true); // Open modal feedback
    };

    const removeFromWishlist = (propertyId) => {
        setWishlist(prev => prev.filter(p => p.id !== propertyId));
    };

    const isInWishlist = (propertyId) => {
        return wishlist.some(p => p.id === propertyId);
    };

    const shareWishlist = (email) => {
        alert(`Wishlist shared with ${email}! (Dummy Action)`);
    };

    const value = {
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        shareWishlist
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}
