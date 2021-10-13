import * as React from 'react';
import Box from '@mui/material/Box';
import AlertUI from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

interface AlertProps {
    open: boolean;
    closeFunc: () => void;
    children: string | JSX.Element | JSX.Element[];
    severity: 'error' | 'warning' | 'info' | 'success';
}

export const Alert = ({
  open,
  closeFunc,
  children,
  severity,
}: AlertProps): JSX.Element => (
  <Box sx={{ width: '100%' }}>
    <Collapse in={open}>
      <AlertUI
        severity={severity}
        action={(
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={closeFunc}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          )}
        sx={{ mb: 2 }}
      >
        {children}
      </AlertUI>
    </Collapse>
  </Box>
);
