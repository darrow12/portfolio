import pdfContent from '../assets/kim-freitas-cv.pdf'

export default function DownloadPDF() {
  const blob = new Blob([pdfContent], { type: 'application/pdf' })

  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'kim-freitas-cv.pdf'
  link.click()

  URL.revokeObjectURL(link.href)
}