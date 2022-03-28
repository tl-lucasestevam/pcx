import { cloneElement, FC, ReactElement } from 'react';

interface InputIconProps {
  icon: ReactElement;
  size?: string;
  color?: string;
}

const InputIcon: FC<InputIconProps> = ({
  icon,
  size = '1.5rem',
  color = 'var(--chakra-colors-gray-600)',
}) => {
  return cloneElement(icon, {
    size,
    color,
  });
};

export default InputIcon;
