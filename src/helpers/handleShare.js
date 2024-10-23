export const handleShare = async (title, url) => {
  try {
    if (navigator.share && navigator.canShare) {
      const response = await fetch(url);
      const blob = await response.blob();
      
      const file = new File([blob], `${title}.${blob.type.split('/')[1]}`, { type: blob.type });
      
      if (navigator.canShare({ files: [file] })) {
        navigator.share({
          title: title,
          text: '¡Mira esta imagen!',
          files: [file]
        }).then(() => {
          console.log('Imagen compartida');
        }).catch((error) => {
          console.error('Error al compartir: ', error);
        });
      } else {
        console.log('No se pueden compartir archivos en este navegador.');
      }
    } else {
      alert('La API de compartir archivos no está disponible en este navegador');
    }
  } catch (error) {
    console.error('Error al compartir la imagen: ', error);
  }
};