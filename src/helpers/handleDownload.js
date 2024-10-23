export const handleDownload = async (title, url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      const extension = blob.type.split('/')[1];
      link.download = `${title}.${extension}`;
      link.click();

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error al descargar la imagen: ', error);
    }
  };
