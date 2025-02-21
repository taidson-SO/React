import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerTitleProps {
  title: string;
  color: string;
  onColorChange: (color: string) => void;
}

export default function ColorPickerTitle({ 
  title, 
  color, 
  onColorChange 
}: ColorPickerTitleProps) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative">
      <h2 
        onDoubleClick={() => setShowPicker(!showPicker)}
        style={{ color: color }}
        className="text-xs font-semibold cursor-pointer select-none"
      >
        {title}
      </h2>
      
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <HexColorPicker 
            color={color} 
            onChange={onColorChange}
          />
          <div 
            className="fixed inset-0 -z-10" 
            onClick={() => setShowPicker(false)}
          />
        </div>
      )}
    </div>
  );
}