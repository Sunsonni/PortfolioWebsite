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
  <div class="resume-container">
    <embed
      :src="pdfUrl"
      width="80%"
      height="600px"
      type="application/pdf"
    >
  </div>
  <button
    class="downloadButton"
    @click="onButtonClick"
  >
    Download resume here
  </button>
</template>
