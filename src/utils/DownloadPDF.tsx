import pdfContent from '../assets/kim-freitas-cv.pdf'

export default function DownloadPDF() {
  fetch(pdfContent)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'kim-freitas-cv.pdf'
      link.click()
      URL.revokeObjectURL(link.href)
    })
    .catch((error) => {
      console.error('Erro ao carregar o PDF:', error)
    })
}
