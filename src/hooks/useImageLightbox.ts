import { ImagePreviewModel } from './../server/validators/image/selectors';
import { useMantineTheme } from '@mantine/core';
import { openContextModal } from '@mantine/modals';
import { useCallback } from 'react';

type OpenLightboxProps = {
  initialSlide?: number;
  images?: ImagePreviewModel[];
};

export const useImageLightbox = (options?: OpenLightboxProps) => {
  const theme = useMantineTheme();

  const openImageLightbox = useCallback(
    (innerProps?: OpenLightboxProps) => {
      openContextModal({
        modal: 'imageLightbox',
        fullScreen: true,
        withCloseButton: false,
        styles: {
          modal: {
            background: theme.colors.dark[7],
          },
        },
        innerProps: {
          ...options,
          ...innerProps,
        },
      });
    },
    [options, theme.colors.dark]
  );

  return { openImageLightbox };
};