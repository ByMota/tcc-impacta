// FontSizeContext.tsx
import { createContext, useState, ReactNode, useContext } from "react";

// Definindo a interface do contexto
interface FontSizeContextProps {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

// Criando o contexto com um valor padrão
const FontSizeContext = createContext<FontSizeContextProps>({
  fontSize: 16,
  increaseFontSize: () => {},
  decreaseFontSize: () => {},
});

// Provedor de contexto
export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
    console.log(fontSize)
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => (prevSize > 8 ? prevSize - 2 : prevSize));
    console.log(fontSize)
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

// Custom Hook para utilizar o contexto
export function useFontSize() {
  return useContext(FontSizeContext);
}
