<template>
  <div>
    <Gallery :uploader="uploader" />
  </div>
  
</template>

<script>

  import FineUploaderTraditional from 'fine-uploader-wrappers'
  import Gallery from 'vue-fineuploader/gallery'

  import { mapActions } from 'vuex'

  export default {
    components: {
      Gallery
    },
    data () {
      const uploader = new FineUploaderTraditional({
        options: {

          deleteFile: {
            enabled: false,
            endpoint: 'my/upload/endpoint'
          },

          // 發出請求，上傳照片。
          request: {
            endpoint: 'http://127.0.0.1:3000/upload'
          },

          // 請求結束callback，打action。
          callbacks: {
            onComplete: (id, name, response) => {
                console.log(id, name, response);
                this.createImg(name);
            }
          },

        },
      })

      return {
        uploader
      }
    },

    methods:{
      ...mapActions(['createImg'])
    },

  }
</script>
