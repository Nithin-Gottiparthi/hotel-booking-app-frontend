import { createContext, useContext, useState } from 'react';
import { getUserByEmail, users } from '../api/users';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // ----------------------------------------------------------------------
  // LEGACY: Dynamic Auth Logic (Temporarily Disabled)
  // ----------------------------------------------------------------------
  /*
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch current user from API
  const fetchMe = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      
      const res = await api.get('/auth/me');
      setUser(res.data);
    } catch (err) {
      console.error(err);
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const signup = async (name, email, password) => {
    const res = await api.post('/auth/register', { name, email, password });
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
    return res.data;
  };
  */

  // ----------------------------------------------------------------------
  // DUMMY: Static Data Auth Logic (Active)
  // ----------------------------------------------------------------------

  // Initialize with dummy user from localStorage or null
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('dummyUser');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Error parsing dummyUser from localStorage", e);
      localStorage.removeItem('dummyUser');
      return null;
    }
  });

  const isAuthenticated = !!user;
  const role = user?.role || null; // 'tenant' or 'owner'

  // Dummy login function
  const login = (email, password) => {
    // Find user by email (password is ignored in dummy auth)
    const foundUser = getUserByEmail(email);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('dummyUser', JSON.stringify(foundUser));
      return { success: true, user: foundUser };
    }

    return { success: false, error: 'User not found' };
  };

  // Dummy signup function
  const signup = (name, email, password, userRole = 'tenant') => {
    // DYNAMIC VALIDATION DISABLED:
    // const existingUser = getUserByEmail(email);
    // if (existingUser) {
    //   return { success: false, error: 'Email already registered' };
    // }

    // Create new dummy user
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      phone: '',
      role: userRole,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`,
      address: {
        street: '',
        city: '',
        state: '',
        pincode: ''
      },
      preferences: {},
      savedProperties: [],
      joinedDate: new Date().toISOString().split('T')[0],
      verified: true
    };

    // Add to users array (in real app, this would be persisted)
    users.push(newUser);

    setUser(newUser);
    localStorage.setItem('dummyUser', JSON.stringify(newUser));
    return { success: true, user: newUser };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('dummyUser');
    // localStorage.removeItem('token'); // Legacy
  };

  // Switch role (for testing purposes)
  const switchRole = (newRole) => {
    if (user && (newRole === 'tenant' || newRole === 'owner')) {
      const updatedUser = { ...user, role: newRole };
      setUser(updatedUser);
      localStorage.setItem('dummyUser', JSON.stringify(updatedUser));
    }
  };

  // Quick login presets for testing
  const quickLogin = (preset) => {
    const presets = {
      tenant: users.find(u => u.role === 'tenant'),
      owner: users.find(u => u.role === 'owner')
    };

    const presetUser = presets[preset];
    if (presetUser) {
      setUser(presetUser);
      localStorage.setItem('dummyUser', JSON.stringify(presetUser));
      return { success: true, user: presetUser };
    }

    return { success: false, error: 'Preset not found' };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        role,
        login,
        signup,
        logout,
        switchRole,
        quickLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

