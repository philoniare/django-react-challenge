import { Button } from '@mui/material';
import React from 'react';

interface IHelixButtonProps {
  children: any;
  onClick?: () => void;

  isActive?: boolean;
}

const HelixButton = ({ children, onClick, isActive = true }: IHelixButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        background: isActive ? '#6074DD' : '#E5E5E5',
        border: '1px solid #6074DD',
        boxShadow: '0px 4px 8px rgba(96, 116, 221, 0.25)',
        borderRadius: '25px',
        color: 'white',
        fontSize: '12px',
        lineHeight: '14px',
        padding: '8px 12px',
        textTransform: 'none',
        ':hover': {
          color: 'black',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default HelixButton;
