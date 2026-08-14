<script setup>
const pdfUrl = 'Resume - Sonnie Nguyen.pdf'

const onButtonClick = () => {
  const link = document.createElement('a')
  link.href = pdfUrl
  link.download = 'Resume - Sonnie Nguyen.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen">
    <embed
      :src="pdfUrl"
      width="80%"
      height="600px"
      type="application/pdf"
    >
</div>
</template>
