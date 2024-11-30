import { Storage } from '@/shared/storage';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Appearance } from 'react-native';

type ThemeType = 'dark' | 'light';

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const getInitialTheme = async () => {
    const storedTheme = Storage.get('theme');

    if (!storedTheme) {
      return Appearance.getColorScheme() || 'dark';
    }

    return storedTheme;
  };

  const value = useMemo(() => {
    return {
      theme: theme || 'dark',
      setTheme,
    };
  }, [theme, setTheme]);

  useEffect(() => {
    getInitialTheme().then(initialTheme => {
      setTheme(initialTheme);
    });
  }, []);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
