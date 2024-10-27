// FontSizeContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface FontSizeContextProps {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

// Criando o contexto com um valor padrão para evitar erros
const FontSizeContext = createContext<FontSizeContextProps | undefined>(undefined);

// Provedor de contexto
export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState(16); // Tamanho de fonte inicial

  const increaseFontSize = () => setFontSize((prev) => prev + 2);
  const decreaseFontSize = () => setFontSize((prev) => (prev > 8 ? prev - 2 : prev));

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

// Custom hook para acessar o contexto
export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize deve ser usado dentro de um FontSizeProvider");
  }
  return context;
}
