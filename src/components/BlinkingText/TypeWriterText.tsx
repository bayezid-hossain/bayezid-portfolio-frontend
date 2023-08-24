import React from 'react';

interface TypeWriterTextProps {
  text: string;
  typingSpeed?: number;
  maxWidth?: number;
  fontSize?: number;
  textColor?: string;
  padding?: string;
  background?: string;
}

const TypeWriterText: React.FC<TypeWriterTextProps> = ({
  text,
  typingSpeed = 2.5,
  maxWidth = 50,
  fontSize = 50,
  textColor = 'black',
  background = 'white',
  padding = '20',
}) => {
  const customStylesForText = {
    '--n': text.length,
    animationDuration: `${typingSpeed}s`,
    '--color': textColor,
  };

  const fontSizeClass = `
  text-[${fontSize}px] 
  md:text-[${fontSize - 9}px]
  lg:text-[${fontSize - 6}px] 
  xl:text-[${fontSize - 9}px]
`;

  const responsivePaddingValue = parseFloat(padding) * 0.5;
  const paddingClass = `
  p-${responsivePaddingValue}px 
  md:p-${responsivePaddingValue - 2}px 
  lg:p-${responsivePaddingValue - 4}px 
  xl:p-${responsivePaddingValue - 6}px
`;

  const customStylesForContainer = {
    maxWidth: `${maxWidth}%`,
    fontFamily: 'monospace',
    fontWeight: 700,
    background: background,
  };

  return (
    <div
      className={`typewriter-container ${fontSizeClass} ${paddingClass}`}
      style={customStylesForContainer}
    >
      <span
        className="type"
        style={{ ...customStylesForText, whiteSpace: 'pre' }}
      >
        {text}
      </span>
    </div>
  );
};

export default TypeWriterText;
